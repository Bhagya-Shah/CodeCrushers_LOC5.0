import React from 'react'
import { useNavigate } from 'react-router-dom'

const EmployeeDashBoard = () => {
    const [employee, setEmployee] = useState()
    const navigate = useNavigate()
    useEffect(() => {
        const start = async () => {
            const token = localStorage.getItem('authToken')
            if (!token) {
                navigate('/')
            }
            const res = await fetch('https://codecrushersloc50-production.up.railway.app/api/user/fet',{
                method:'POST',
                headers:{
                  'Content-Type':'application/json',
                  'Authorization':`Bearer ${token}`
                }
            })
            const data = await res.json()
            const resEmp = await fetch('https://codecrushersloc50-production.up.railway.app/api/employee/')
            setEmployee(data)
    }}, [])

    return (
        <div>
            <section>
                <div className="container">
                    {employee && <b>Hi {employee.name}</b>
                     
                    
                    
                    }
                </div>
            </section>
        </div>
    )
}

export default EmployeeDashBoard
