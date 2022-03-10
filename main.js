//https://teachablemachine.withgoogle.com/models/Wu4U2dpOm/
Webcam.set({
    width:350,
    height:300,
    image_format: 'png',
    png_quality:90
})

camera = document.getElementById("camera");

Webcam.attach('#camera');

function take_snapshot()
{
    Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML = '<img id="captured_image" src="'+data_uri+'"/>';
    });
}

console.log('ml5 version', ml5.version);
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Wu4U2dpOm/model.json",modelLoaded);

function modelLoaded()
{
    console.log('Modal Loaded!');
}

function speak()
{
    var synth = window.speechSynthesis;
    speak_data_1 = "The First Prediction Is" + prediction_1;
    speak_data_2 = "And The Second Prediction Is" + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1 + speak_data_2);
    synth.speak(utterThis);
}

function check()
{
img = document.getElementById('captured_image');
classifier.classify(img, gotResult);
}

function gotResult(error, results)
{
    if (error)
    {
        console.error(error);
    }
    else
    {
        console.log(results);
        document.getElementById("result_hand_gesture_name1").innerHTML = results[0].label;
        document.getElementById("result_hand_gesture_name2").innerHTML = results[1].label;
        prediction_1 = results[0].label;
        prediction_2 = results[1].label;    
        speak();
        
        if(results[0].label == "Victory Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#9996;";
        }

        if(results[0].label == "Vulcan Salute Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#128406;";
        }

        if(results[0].label == "Rock Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#129304;";
        }

        if(results[0].label == "Ok Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#128076;";
        }

        if(results[0].label == "Hello/Goodbye Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#128400;";
        }

        if(results[0].label == "Thunbs Up Sign")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#128077;";
        }

        if(results[0].label == "Raised Fist Emoji")
        {
            document.getElementById("update_hand_gesture1").innerHTML = "&#9994;";
        }


        if(results[0].label == "Victory Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#9996;";
        }

        if(results[0].label == "Vulcan Salute Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#128406;";
        }

        if(results[0].label == "Rock Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#129304;";
        }

        if(results[0].label == "Ok Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#128076;";
        }

        if(results[0].label == "Hello/Goodbye Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#128400;";
        }

        if(results[0].label == "Thunbs Up Sign")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#128077;";
        }

        if(results[0].label == "Raised Fist Emoji")
        {
            document.getElementById("update_hand_gesture2").innerHTML = "&#9994;";
        }
    }
}
