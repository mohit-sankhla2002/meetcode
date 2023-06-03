import React from 'react'
import problems from '../constants/problems'
import Problem from '../components/Problem'
const ProblemPage = () => {
  return (
    <div className={`shadow-card border border-black rounded-3xl p-10 m-3`}>
        {problems.map(problem => (<Problem key={problem.id} id={problem.id} title={problem.title} difficulty={problem.difficulty} tags={problem.tags}/>))}
    </div>
  )
}

export default ProblemPage;