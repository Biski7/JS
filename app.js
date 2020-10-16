let result = 0;


var UIController = (function () {

    var DOMStrings = {
        playerScore : '#score',
        time : '#time',
        box : '.sq',
        start: '.start'
    };

    return {

        //For future improvement
        // insertTime: function() {
        //     document.querySelector(time).textContent 
        // };

        getDOMStrings: function() {
            return DOMStrings;
        },

        showImage: function () {
            let id, sq ;
            sq = document.querySelectorAll('.sq');

            // adding classlist image 
            sq.forEach(a => {
                a.classList.remove('game-image');
            });
    

            id = Math.floor(Math.random()  * 9 );
            idselect = sq[id];

            // adding class to the specific id
            idselect.classList.add('game-image'); 
        
            // selecting exact id value
            exactId= idselect.id;


            sq.forEach(item => {
                item.addEventListener('click', () => {  //'mouseup also works
                    if(item.id === exactId){
                    result = result + 1;
                    document.querySelector('#score').textContent = result;
                    exactId = 0;
                    }
                })
            })

        
        },

        controlImage: function() {
            setInterval(this.showImage,500);
        },

        manageTime : function(){

            if (time > 0 ) {
                time = time-1;
                document.getElementById('time').textContent = time;
                // document.querySelector('#time').textContent = time; //both works

            } else {
                alert('Time finish!!, Your final score is:' + result + ' ',  window.location.reload());
                
            }
        },

        controlTime: function () {
            let specifiedTime;
            specifiedTime = document.querySelector(DOMStrings.time).textContent;
            time = specifiedTime;
            setInterval(this.manageTime,1000);
        },

    }


}) ();

var MainController = (function (UICtrl) {

    var DOM = UICtrl.getDOMStrings;

    // MainController.EventListeners();
    var EventListeners = function () {
        document.querySelector('.start').addEventListener('click', displayImage)
    };

    var displayImage = function (){
        console.log('Success');
        var img ;

        // 1. Display Image & Image in random location 
        img = UICtrl.controlImage();

        // 2. Fix time interval of image in box
        UICtrl.controlTime();

    }

    
    return {

        initialize: function () {
            
            EventListeners();
            result = 0;
        }


    };

}) (UIController);

MainController.initialize();


