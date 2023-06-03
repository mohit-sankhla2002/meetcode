import React from 'react'
import {Link} from 'react-router-dom'
import Card from '../components/Card.js'
const Problem = (props) => {
    const diff = props.difficulty;
    let colorClass = "text-gray-600";
    switch (diff.toLowerCase()) {
        case "hard":
            colorClass = "text-red-500"
            break;
        case "medium":
            colorClass = "text-yellow-300"
            break;
        case "easy": 
            colorClass = "text-lime-600";
            break;
        default:
            break;
    }
  return (
    <Link to={`/problem/${props.id}`}>
      <Card className={`p-5 m-5`}>
        <h1 className="text-xl">{props.title}</h1>
        <p className="w-full flex gap-1">
          {props.tags.map((tag) => (
            <span className="py-1 px-1 border border-slate-700 rounded-3xl text-sm">
              {tag}
            </span>
          ))}
        </p>
        <p className={colorClass}>{diff}</p>
      </Card>
    </Link>
  );
}

export default Problem;