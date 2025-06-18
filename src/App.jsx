import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Food from './Food.jsx'

import Card from './Card.jsx'

import Button from './Button/Button.jsx'

import Student from './Student.jsx'

import UserGreeting from './UserGreeting.jsx'

import List from './List.jsx'

import UseState from './UseState.jsx'

function App() {
    return (
        <>
            <Header></Header>
            <Food></Food>
            {/* I can reuse the Food component just by copy and pasting it again: */}
            <Food></Food>
            <Footer></Footer>

            <Card></Card>
            <Card></Card>
            <Card></Card>

            <Button></Button>

            {/* Student is the child, App is the parent in this case */}
            <Student name="Tecca" age={22} isNonchalant={true}></Student>
            <Student name="Playboi Carti" age={28} isNonchalant={false}></Student>
            <Student name="?"></Student>

            <UserGreeting isLoggedIn={false} username="Gary Li"></UserGreeting>

            <List></List>

            <UseState></UseState>
        </>
    );
}

export default App