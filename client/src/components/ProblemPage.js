import React, {useState} from 'react'
import { useParams } from 'react-router';
import problems from '../constants/problems';
import NotFound from '../pages/404';
import Button from './Button';
import Card from './Card';
import CodeEditor from './CodeEditor';
const ProblemPage = () => {
    const [lang, setLang] = useState('C++');

    const languageChangeHandler = (event) => {
      setLang(event.target.value);
    }

    const [code, getCode] = useState('');

    const getCodeHandler = (code) => {
      getCode(code);
    }

    const codeSubmitHandler = (event) => {
      event.preventDefault();
      console.log(code);
    }

    const codeResetHandler = (e) => {
      e.preventDefault();
    };

    const {problemId} = useParams();
    const problem = problems.find(problem => problem.id === +problemId);
    if (!problem) {
        return (<NotFound />);
    } else {
        return (
          <Card className="p-5 m-5 grid grid-cols-2 min-h-[70vh] justify-between border border-red gap-5">
            <div className="border border-black max-w-[50vw] p-4">
              <h1 className="text-2xl font-rubik">
                <span>{problem.id + ". "}</span>
                {problem.title}
              </h1>
              <h1 className="text-xl font-rubik">{problem.description}</h1>
            </div>
            <form className="max-w-[50vw] flex flex-col gap-3">
              <select onChange={languageChangeHandler} className={`border border-black width-[10%] outline-none`}>
                <option value="JavaScript">JavaScript</option>
                <option value="C++">C++</option>
                <option value="Java">Java</option>
                <option value="C">C</option>
              </select>
              <CodeEditor code={getCodeHandler} language={lang} className="border border-black font-xl font-rubik h-[100%] w-[100%] min-h-[50vh] p-1 outline-none active:outline-none" />
              <div className="flex gap-5">
                <Button type="submit" onClick={codeSubmitHandler}>Submit</Button>
                <Button type="reset" onClick={codeResetHandler}>Reset</Button>
              </div>
            </form>
          </Card>
        );
    }
}

export default ProblemPage;