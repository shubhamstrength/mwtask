import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Card, Icon, Image, Header } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      apiUrl: "https://jsonplaceholder.typicode.com/posts",
      posts: [],
      showPost: true,
      userName: "",
      password: "",
      email: "",
      number: "",
      submitted: false
    };
  }
  componentWillMount() {
    this.getPosts();
  }

  getPosts() {
    fetch(this.state.apiUrl)
      .then(response => response.json())
      .then(json =>
        this.setState({
          posts: json
        })
      );
  }

  handleSubmit = e => {
    e.preventDefault();
    fetch(this.state.apiUrl, {
      method: "POST",
      body: JSON.stringify({
        userName: this.state.userName,
        password: this.state.password,
        email: this.state.email,
        number: this.state.number
      })
    })
      .then(res => res.json())
      .then(res => this.setState({ submitted: true }));
  };

  render() {
    return (
      <div className="App">
        <div className="app-header">
          <div>A Big ol' Blog</div>

          <div onClick={_ => this.setState({ showPost: !this.state.showPost })}>
            {this.state.showPost ? "Create Post" : "Show Post"}
          </div>
        </div>
        <div class="ui secondary segment">
      <div class="ui three column grid">
  <div class="column">
    <Card>
    <div class="ui grey inverted center aligned segment">150X150</div>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
  <div class="column">
 
    <Card>
    <div class="ui green inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>
 
  </div>
  <div class="column">
    <Card>
    <div class="ui red inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
</div>
</div>
<div class="ui secondary segment">
      <div class="ui three column grid">
  <div class="column">
    <Card>
    <div class="ui grey inverted center aligned segment">150X150</div>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
  <div class="column">
 
    <Card>
    <div class="ui green inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>
 
  </div>
  <div class="column">
    <Card>
    <div class="ui red inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
</div>
</div>
<div class="ui secondary segment">
      <div class="ui three column grid">
  <div class="column">
    <Card>
    <div class="ui grey inverted center aligned segment">150X150</div>
    <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
  <div class="column">
 
    <Card>
    <div class="ui green inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>
 
  </div>
  <div class="column">
    <Card>
    <div class="ui red inverted center aligned segment">150X150</div> <Card.Content>
      <Card.Header>Matthew</Card.Header>
      <Card.Meta>
        <span className='date'>Joined in 2015</span>
      </Card.Meta>
      <Card.Description>Matthew is a musician living in Nashville.</Card.Description>
    </Card.Content>
   
  </Card>

  </div>
</div>
</div>
        {this.state.showPost ? (
          <div className="app-posts">
            {this.state.posts.map(x => (
              <div className="app-post" key={x.id}>
                <div>{x.title}</div>
                <div>{x.body}</div>
              </div>
            ))}
          </div>
        ) : (
          <div className="app-form">
            {!this.state.submitted ? (
              <form onSubmit={this.handleSubmit}>
                <input
                  type="text"
                  placeholder="Username"
                  value={this.state.userName}
                  onChange={e => this.setState({ userName: e.target.value })}
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={this.state.password}
                  onChange={e => this.setState({ password: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email"
                  value={this.state.email}
                  onChange={e => this.setState({ email: e.target.value })}
                />
                <input
                  type="number"
                  placeholder="Mobile Number"
                  value={this.state.number}
                  onChange={e => this.setState({ number: e.target.value })}
                />
                <input type="submit" />
              </form>
            ) : (
              <div>
                <div>{this.state.userName}</div>
                <div>{this.state.password}</div>
                <div>{this.state.email}</div>
                <div>{this.state.number}</div>
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default App;
