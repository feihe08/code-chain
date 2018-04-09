import React, { Component } from 'react'
import MdEditor from './components/MdEditor'
import './Create.scss'

const defaultContent = {
  content: {
    document: {
      nodes: [
        {
          object: 'block',
          type: 'paragraph',
          nodes: [
            {
              object: 'text',
              leaves: [
                {
                  text: 'A line of text in a paragraph.'
                }
              ]
            }
          ]
        }
      ]
    }
  }
}

export default class Create extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'just a title',
      content: defaultContent
    }
  }
  render() {
    const { title, content } = this.state
    return (
      <div id="create">
        <MdEditor
          title={title}
          content={content}
          onTitleChange={this.handleTitleChange}
          onContentChange={this.handleContentChange}
        />
      </div>
    )
  }
  handleContentChange = title => {
    this.setState([title])
  }
  handleContentChange = content => {
    this.setState({
      content
    })
  }
}
