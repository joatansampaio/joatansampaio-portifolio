import { Component } from "react";

class NavBar extends Component{

    constructor(){
        super();
    }

    state = {

    }

    componentDidMount(){

    }

    render(){
        return (
            <nav className="whitespace-nowrap flex justify-center font-extralight text-2xl">
            <ul className='list-none inline-flex gap-5 animate-pulseslow text-blue-50' >
              <li><a href="#">About me</a></li>
              <li><a href="#">Projects</a></li>
              <li><a href="#">Skills</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </nav>
        );
    }

}

export default NavBar;