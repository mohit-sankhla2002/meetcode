import SignupForm from "../components/SignupForm";
import Card from '../components/Card'
export default function SignupPage() {
    return <Card className={`max-w-[600px] m-auto mt-[10vh] mb-[20vh]`}>
        <SignupForm />
    </Card>
}