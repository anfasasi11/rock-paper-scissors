function getComputerchoice() {
            let numRandom = Math.floor(Math.random()*3) + 1 ;
            
            if(numRandom == 1) {               
                return "ROCK";
            
            } else if(numRandom == 2) {                
                return "PAPER";
            
            } else if(numRandom == 3) {                
                return "SCISSORS";            
            }
        }

        function getHumanchoice() {
            let choice = prompt("Enter your choice") ;
            return choice.toUpperCase() ;
            
        }

        let humnanScore = 0 ;
        let computerScore = 0 ;

        function playRound() {         
            let humanSelection = getHumanchoice() ;
            let computerSelection = getComputerchoice() ;

            if(humanSelection != computerSelection) {

                if(humanSelection == "ROCK" && computerSelection == "SCISSORS" || 
                   humanSelection == "SCISSORS" && computerSelection == "PAPER" || 
                   humanSelection == "PAPER" && computerSelection == "ROCK") {
                    humnanScore++ ;
                    console.log(`YOU WON!!\n${humanSelection} BEATS ${computerSelection}`) ;

                } else { 
                    computerScore++ ;
                    console.log(`YOU LOSE!!\n${computerSelection} BEATS ${humanSelection}`) ;
            
                }

            } else console.log("ITS A DRAW!!") ;

        }

        function playGame() {
            
            playRound() ;
            playRound() ;
            playRound() ;
            playRound() ;
            playRound() ;

            console.log(`GAME OVER\nSCORE: ${humnanScore} || ${computerScore}`) ;
            humnanScore = 0 ;
            computerScore = 0 ;
        }