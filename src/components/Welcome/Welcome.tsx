import './Welcome.css'

type Props = {
  fullname: string,
  age: number,
  address: string,
  isDarkMode: boolean,
  isMobile: boolean
}

const Welcome = ({ fullname, age, address, isDarkMode, isMobile }: Props) => {
  return (
    <>
      <h1 className="welcome-message">
        Hello {fullname}! You are {age} years old. You live in {address}. Theme: {isDarkMode ? 'Dark' : 'Light'}. You are viewing this page on {isMobile ? 'mobile' : 'desktop'}.
      </h1>
      <div style={{ backgroundColor: isDarkMode ? 'black' : 'white', width: '200px', height: '200px' }}></div>
    </>
  )
}

export default Welcome