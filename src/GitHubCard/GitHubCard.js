import React from 'react'
import Card from "react-bootstrap/Card"
import Cara from './cara.jpg'

export default function GitHubCard() {
  return (
    <div className="card">
        <Card style={{ width: "18rem"}}>
        {/* Use your GitHub info instead, but Mickey Mouse is used as an example */}
        <Card.Img variant="top" src={Cara} />
        {/* Source: https://en.wikipedia.org/wiki/Mickey_Mouse */}
        <Card.Body>
            <Card.Title>This Is Me</Card.Title>
            <Card.Text>
            This is a cartoon of me!
            </Card.Text>
        </Card.Body>
        </Card>
      </div>
  )
}