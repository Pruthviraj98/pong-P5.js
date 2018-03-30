
function Puck()
    {
        this.x= width/2;
        this.y= height/2;
        this.xspeed=10;
        this.yspeed=10;
        this.score1=0;
        this.score2=0;
        this.show=function(){
        fill(255);
        ellipse(this.x, this.y, 24, 24);
        }

        this.update=function(){
            this.x=this.x+this.xspeed;
            this.y=this.y+this.yspeed;
            if(this.x>1220||this.x<0){
                if(this.x>1200){
                    this.score1+=1;
                    console.log(this.score1);
                    var prevScore = parseInt(scoreElem.html().substring(8));
                    scoreElem.html('Score = ' + (prevScore + 1));
            
                    var prevScore2 = parseInt(scoreElem2.html().substring(8));
                    scoreElem2.html('Score = ' + (prevScore2 + 1));
            
                }else{
                    this.score2+=1;
                    console.log(this.score2);
                }
                this.x=0;
                this.y=0;
         //       this.xspeed=-this.xspeed;
            }
            if(this.y>700||this.y<0){
                this.yspeed=-this.yspeed;
            }
        }
    }

