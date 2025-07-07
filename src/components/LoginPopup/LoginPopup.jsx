import axios from 'axios'
import { useCallback, useContext, useMemo, useState } from 'react'
import { toast } from 'react-toastify'
import { assets } from '../../assets/assets'
import { StoreContext } from '../../Context/StoreContext'

const LoginPopup = ({ setShowLogin }) => {
    const { setToken, url, loadCartData } = useContext(StoreContext)
    const [currState, setCurrState] = useState("Sign Up")
    const [isLoading, setIsLoading] = useState(false)

    const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
    })

    const apiEndpoint = useMemo(() =>
        currState === "Login" ? `${url}/user/login` : `${url}/user/register`,
        [currState, url])

    const onChangeHandler = useCallback((event) => {
        const { name, value } = event.target
        setData(prev => ({ ...prev, [name]: value }))
    }, [])

    const onLogin = useCallback(async (e) => {
        e.preventDefault()
        if (isLoading) return

        setIsLoading(true)
        try {
            const response = await axios.post(apiEndpoint, data)

            if (response.data.success) {
                const { token, user } = response.data
                localStorage.setItem('token', token)
                if (user) localStorage.setItem('user', JSON.stringify(user))
                window.dispatchEvent(new Event("storage"));

                setToken(token)
                toast.success(`${currState === "Login" ? "Login" : "Account creation"} successful! 🍰`)
                await loadCartData({ token })
                setShowLogin(false)
            } else {
                toast.error(response.data.message || "An error occurred")
            }
        } catch (error) {
            const errMsg = error.response?.data?.message || error.message || "Network error occurred"
            toast.error(errMsg)
        } finally {
            setIsLoading(false)
        }
    }, [apiEndpoint, data, isLoading, currState, setToken, loadCartData, setShowLogin])

    const toggleState = useCallback(() => {
        setCurrState(prev => prev === "Login" ? "Sign Up" : "Login")
        if (currState === "Sign Up") {
            setData(prev => ({ ...prev, name: "" }))
        }
    }, [currState])

    const handleClose = useCallback(() => {
        setShowLogin(false)
    }, [setShowLogin])

    const isFormValid = useMemo(() => {
        const { name, email, password } = data
        const emailValid = email.trim() && /\S+@\S+\.\S+/.test(email)
        const passwordValid = password.trim().length >= 6
        const nameValid = currState === "Login" || name.trim()
        return emailValid && passwordValid && nameValid
    }, [data, currState])

    const inputClass = "w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent outline-none transition-all duration-200 disabled:bg-gray-100 disabled:cursor-not-allowed text-gray-700 placeholder-gray-400"

    const submitButtonClass = useMemo(() =>
        `w-full py-3 px-4 rounded-lg font-semibold text-white transition-all duration-200 transform ${!isFormValid || isLoading
            ? 'bg-gray-400 cursor-not-allowed opacity-60'
            : 'bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 hover:scale-105 shadow-lg hover:shadow-xl'
        }`,
        [isFormValid, isLoading])

    const toggleText = currState === "Login"
        ? "New to our bakery?"
        : "Already have an account?"

    const toggleButtonText = currState === "Login"
        ? "Create account 🎂"
        : "Login instead 🍰"

    const Spinner = () => (
        <span className="flex items-center justify-center gap-2">
            <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
            </svg>
            🍰 Processing...
        </span>
    )

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 backdrop-blur-sm">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md mx-4 overflow-hidden transform transition-all">
                <form onSubmit={onLogin} className="p-8">

                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <h2 className="text-3xl font-bold text-gray-800 flex items-center gap-2">
                            🍰 {currState}
                        </h2>
                        <button
                            type="button"
                            onClick={handleClose}
                            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                        >
                            <img src={assets.cross_icon} alt="Close" className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Inputs */}
                    <div className="space-y-4 mb-6">
                        {currState === "Sign Up" && (
                            <input
                                name="name"
                                type="text"
                                placeholder="Your sweet name 🧁"
                                value={data.name}
                                onChange={onChangeHandler}
                                className={inputClass}
                                required
                                disabled={isLoading}
                                autoComplete="name"
                            />
                        )}
                        <input
                            name="email"
                            type="email"
                            placeholder="Your email address 📧"
                            value={data.email}
                            onChange={onChangeHandler}
                            className={inputClass}
                            required
                            disabled={isLoading}
                            autoComplete="email"
                        />
                        <input
                            name="password"
                            type="password"
                            placeholder="Password (min 6 characters) 🔒"
                            value={data.password}
                            onChange={onChangeHandler}
                            className={inputClass}
                            required
                            minLength="6"
                            disabled={isLoading}
                            autoComplete={currState === "Login" ? "current-password" : "new-password"}
                        />
                    </div>

                    {/* Submit Button */}
                    <button type="submit" disabled={!isFormValid || isLoading} className={submitButtonClass}>
                        {isLoading ? <Spinner /> : (
                            currState === "Login" ? "🍰 Login to Order" : "🎂 Create Sweet Account"
                        )}
                    </button>

                    {/* Terms */}
                    <div className="flex items-start gap-3 mt-6 p-4 bg-gray-50 rounded-lg">
                        <input
                            type="checkbox"
                            id="terms-checkbox"
                            required
                            disabled={isLoading}
                            className="mt-1 w-4 h-4 text-pink-500 border-2 border-gray-300 rounded focus:ring-pink-500 focus:ring-2"
                        />
                        <label htmlFor="terms-checkbox" className="text-sm text-gray-600 leading-relaxed">
                            By continuing, I agree to the terms of use & privacy policy for this delicious cake service 🍰
                        </label>
                    </div>

                    {/* Toggle */}
                    <div className="text-center mt-6 pt-4 border-t border-gray-200">
                        <p className="text-gray-600">
                            {toggleText}
                            <button
                                type="button"
                                onClick={toggleState}
                                className="ml-1 text-pink-600 hover:text-pink-700 font-semibold underline decoration-2 underline-offset-2 hover:decoration-pink-700 transition-colors duration-200"
                            >
                                {toggleButtonText}
                            </button>
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginPopup
