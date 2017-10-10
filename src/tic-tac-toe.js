class TicTacToe {
    
        constructor() {
            this.count = 0; 
            this.currentPlayer = 'x';
            this.winner = null;
            this.field = [];  
            for(var i = 0; i < 3; i++){  // initializing the field
              this.field[i] = [];  
              for(var j = 0; j < 3; j++)
                    this.field[i][j] = null;
            }
    
        }
    
        isFinished() {
          if(this.getWinner() != null || this.isDraw())
              return true;
          return false;
        }
  
        getCurrentPlayerSymbol() {
            return this.currentPlayer;
        }
    
        nextTurn(rowIndex, columnIndex) {
            if(  this.getFieldValue(rowIndex, columnIndex) == null){
        
              this.field[rowIndex][columnIndex] = this.getCurrentPlayerSymbol();
                this.count++;
                if(this.count >= 5)
                this.checkEverything();       
                if(this.getCurrentPlayerSymbol() == 'x')
                    this.currentPlayer = 'o';
                else
                    this.currentPlayer = 'x';
            }
            
        }
        checkEverything(){
    
            var winner  = this.checkDiagonals();
            if(winner != null)
                this.winner = winner;
    
            for(var i = 0; i < 3; i++){
                winner = this.checkXAxis(i);
                if(winner != null)
                    this.winner = winner;
            }
    
            for(var i = 0; i < 3; i++){
                winner = this.checkYAxis(i);
                if(winner != null)
                    this.winner = winner;
            }
    
        }
    
        checkDiagonals(){ //Do you know the correct word?
            var value = this.getFieldValue(1, 1); // the exact center
            if(this.getFieldValue(0, 0) == value && this.getFieldValue(2 ,2) == value)
                return value;
            if(this.getFieldValue(0, 2) == value && this.getFieldValue(2, 0) ==value)
                return value;
            return null;
        }
    
        checkXAxis(rowIndex){
            var value = this.getFieldValue(rowIndex , 0);
            if(value == null)
              return null;
            for(var i = 1; i < 3; i++){
                if(this.getFieldValue(rowIndex,i) == null || this.getFieldValue(rowIndex,i) != value)
                    return null;
            }
            return value;
        }
    
        checkYAxis(columnIndex){
            var value = this.getFieldValue(0 , columnIndex);
            if(value == null)
              return null;
            for(var i = 1; i < 3; i++){
                if(this.getFieldValue(i,columnIndex) == null || this.getFieldValue(i,columnIndex) != value)
                    return null;
            }
            return value;
        }
        
    
          
        getWinner() {
          
            return this.winner;
        }
    
        noMoreTurns() {
            if(this.count == 9)
                return true;
            return false;
        }
    
        isDraw() {
            if(this.noMoreTurns() && this.getWinner() == null)
                return true;    
            return false;
        }
    
        getFieldValue(rowIndex, colIndex) {
            return this.field[rowIndex][colIndex];
        }
        display(){
          var string = "";
            for(var i = 0 ; i < 3; i++){
              for(var j = 0; j < 3; j++){
                  string+= this.getFieldValue(i , j) + "  ";
              }
              string += '\n'; 
          }
          console.log(string);
        }
    }
  
  module.exports = TicTacToe;
  