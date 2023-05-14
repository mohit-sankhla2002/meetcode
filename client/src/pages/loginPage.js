import LoginForm from "../components/LoginForm";
import Card from '../components/Card'
export default function LoginPage() {
    return <Card className={`max-w-[600px] m-auto mt-[20vh] mb-[30vh]`}>
        <LoginForm />
    </Card>
}