export const greeceScenes = [

{
  id:"morning",

  duration:30,

  title:"Imagine your mornings like this.",
  description:"Coffee by the sea. Sunshine every day.",

  image:"/morning_image.jpg",
  position:"center center",

  overlay:{
    top:0.35,
    bottom:0.55
  },


  camera:{

    scale:0.08,
    moveY:-18,

    enterBlur:12,

    zoomSpeed:1,
    easing:"smooth",
    moveX:-18

  },


  transition:{

    image:{
      enterDuration:0.8,
      exitDuration:0.8,
      enterScale:1.05,
      exitScale:1
    },

    text:{

      enter:{
        start:0.02,
        duration:0.10
      },

      exit:{
        start:0.85,
        duration:0.15
      }

    }

  },


  text:{

    top:"60%",
    width:"750px",
    align:"center",

    blur:10,

    enterOffset:15,
    exitOffset:25

  }

},



{
  id:"possibilities",

  duration:20,

  title:"One home. Endless possibilities.",
  description:"From Greece, Europe becomes part of your everyday life.",

  image:"/second_scene.jpg",
  position:"center center",

  overlay:{
    top:0.35,
    bottom:0.55
  },


  camera:{

    scale:0.08,
    moveY:-18,

    enterBlur:12,

    zoomSpeed:1,
    easing:"smooth",
    moveX:22

  },


  transition:{

    image:{
      enterDuration:0.8,
      exitDuration:0.8,
      enterScale:1.05,
      exitScale:1
    },

    text:{

      enter:{
        start:0.02,
        duration:0.10
      },

      exit:{
        start:0.85,
        duration:0.15
      }

    }

  },


  text:{

    top:"60%",
    width:"750px",
    align:"center",

    blur:10,

    enterOffset:15,
    exitOffset:25

  }

},



{
  id:"investment",

  duration:20,

  title:"Invest where people dream of living.",
  description:"A destination loved by investors worldwide.",

  image:"/third_scene.jpg",
  position:"center center",

  overlay:{
    top:0.35,
    bottom:0.55
  },


  camera:{

    scale:0.08,
    moveY:-18,

    enterBlur:12,

    zoomSpeed:1,
    easing:"smooth",
    moveX:10

  },


  transition:{

    image:{
      enterDuration:0.8,
      exitDuration:0.8,
      enterScale:1.05,
      exitScale:1
    },

    text:{

      enter:{
        start:0.02,
        duration:0.10
      },

      exit:{
        start:0.85,
        duration:0.15
      }

    }

  },


  text:{

    top:"60%",
    width:"750px",
    align:"center",

    blur:10,

    enterOffset:15,
    exitOffset:25

  }

},



{
  id:"future",

  duration:30,

  title:"A future your family can call home.",
  description:"Create memories in Greece for generations.",

  image:"/family_scene.jpg",
  position:"center center",

  overlay:{
    top:0.15,
    bottom:0.35
  },


  camera:{

    scale:0.08,
    moveY:-18,

    enterBlur:12,

    zoomSpeed:1,
    easing:"smooth",
    moveX:-25

  },


  transition:{

    image:{
      enterDuration:0.8,
      exitDuration:0.8,
      enterScale:1.05,
      exitScale:1
    },

    text:{

      enter:{
        start:0.02,
        duration:0.10
      },

      exit:{
        start:0.85,
        duration:0.15
      }

    }

  },


  text:{

    top:"60%",
    width:"750px",
    align:"center",

    blur:10,

    enterOffset:15,
    exitOffset:25

  }

}

];