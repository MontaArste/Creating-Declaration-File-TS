import * as communicatorModularUMD from "communicatorModularUMD";
class Communicator {
    constructor(){}
        greet(message: string){
            //return "<h1" + message + "</h1>";
            //return "<h1>" +_.toUpper(message) + "</h1>"
            return communicatorModularUMD(message);
        }
    }
        var communicator = new Communicator();
        document!.body.innerHTML = communicator.greet("Hello world!");
