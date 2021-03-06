  /* ************************************ */
  /* Define helper functions */
  /* ************************************ */
  // General helper functions
  var randomDraw = function(lst) {
    var index = Math.floor(Math.random() * (lst.length))
    return lst[index]
  }

  var getMask = function() {
    var mask = randomDraw(['img/Pmask1.jpg', 'img/Pmask2.jpg', 'img/Pmask3.jpg', 'img/Pmask4.jpg', 'img/Pmask5.jpg'])
    return '<div class = imageBox><img class = image src = ' + mask + ' </img></div>'
  }
  
  // Line task helper functions
  var getTarget_line = function() {
    var stim_line = ''
    stim_line = shuffledStim_line[curr_trial_line].target
    return '<div class = imageBox><img class = image src = ' + stim_line + ' </img></div>'
  }

  var getPracticeTarget_line = function() {
    var stim_line = ''
    stim_line = shuffledStim_line_prac[prac_trial_line].target
    return '<div class = imageBox><img class = image src = ' + stim_line + ' </img></div>'
  }

  var getProbe_line = function() {
    var stim_line = ''
    stim_line = shuffledStim_line[curr_trial_line].probe
    return '<div class = imageBox><img class = image src = ' + stim_line + ' </img></div>'
  }

  var getPracticeProbe_line = function() {
    var stim_line = ''
    stim_line = shuffledStim_line_prac[prac_trial_line].probe
    return '<div class = imageBox><img class = image src = ' + stim_line + ' </img></div>'
  }

  // Face task helper functions
  var getTarget_face = function() {
    var stim_face = ''
    stim_face = shuffledStims_face[curr_trial_face].target
    return '<div class = imageBox><img class = image src = ' + stim_face + ' </img></div>'
  }

  var getPracticeTarget_face = function() {
    var stim_face = ''
    stim_face = shuffledStim_face_prac[prac_trial_face].target
    return '<div class = imageBox><img class = image src = ' + stim_face + ' </img></div>'
  }

  var getProbe_face = function() {
    var stim_face = ''
    stim_face = shuffledStims_face[curr_trial_face].probe
    return '<div class = imageBox><img class = image src = ' + stim_face + ' </img></div>'
  }

  var getPracticeProbe_face = function() {
    var stim_face = ''
    stim_face = shuffledStim_face_prac[prac_trial_face].probe
    return '<div class = imageBox><img class = image src = ' + stim_face + ' </img></div>'
  }


  /* ************************************ */
  /* Define experimental variables */
  /* ************************************ */
  var feedback_index = 0
  var curr_trial_line = 0
  var prac_trial_line = 0
  var test_length_line = 160 
  var practice_length_line = 8 
  var base_path_line = 'img/line_images/'
  var n_base_line = 20 
  
  // Set up practice line images
  var practice_start = 20
  var n_practice_base = 4
  var practice_stim_lines = []
  for (var i = 0; i < n_practice_base; i++) {
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_al_01_01.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if (j == 1) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_al_02_02.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 2) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_al_01_02.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 3) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_al_02_01.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 4) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_mis_01_01.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 5) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_mis_02_02.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 6) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_mis_01_02.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        practice_stim_lines.push(practice_stim_line)
      } else if(j == 7) {
        var practice_stim_line = {
          target: [base_path_line + (i+practice_start+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+practice_start+1) + '_mis_02_01.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        practice_stim_lines.push(practice_stim_line)
      }
    } 
  }

  var prac_images_line = []
  for (var i = 0; i < practice_stim_lines.length; i++) {
    prac_images_line.push(practice_stim_lines[i].target)
    prac_images_line.push(practice_stim_lines[i].probe)
  }
  //preload images
  jsPsych.pluginAPI.preloadImages(prac_images_line)

  var shuffledStim_line_prac = jsPsych.randomization.repeat(practice_stim_lines, 1);

  // Set up experiment line images
  var stim_lines = []
  for (var i = 0; i < n_base_line; i++) {
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_al_01_01.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        stim_lines.push(stim_line)
      } else if (j == 1) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_al_02_02.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        stim_lines.push(stim_line)
      } else if(j == 2) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_al_01_02.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        stim_lines.push(stim_line)
      } else if(j == 3) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_al_02_01.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        stim_lines.push(stim_line)
      } else if(j == 4) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_mis_01_01.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        stim_lines.push(stim_line)
      } else if(j == 5) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_mis_02_02.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        stim_lines.push(stim_line)
      } else if(j == 6) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_mis_01_02.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        stim_lines.push(stim_line)
      } else if(j == 7) {
        var stim_line = {
          target: [base_path_line + (i+1) + '_target_01_01.png'],
          probe: [base_path_line + (i+1) + '_mis_02_01.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        stim_lines.push(stim_line)
      }
    } 
  }
    
  var images_line = []
  for (var i = 0; i < stim_lines.length; i++) {
    images_line.push(stim_lines[i].target)
    images_line.push(stim_lines[i].probe)
  }
  //preload images
  jsPsych.pluginAPI.preloadImages(images_line)

  var shuffledStim_line = jsPsych.randomization.repeat(stim_lines, 1);


  // Set up experiment face images
  var curr_trial_face = 0
  var prac_trial_face = 0
  var test_length_face = 160 
  var practice_length_face = 4
  var base_path_face = 'img/face_images/'
  var n_base_face = 10 

  // Set up practice face images
  var practice_start_face = 1
  var practice_stim_faces = []
  for (var i = 0; i < n_practice_base; i++) {
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_al_01_01.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if (j == 1) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_al_02_02.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 2) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_al_01_02.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 3) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_al_02_01.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 4) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_mis_01_01.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 5) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_mis_02_02.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 6) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_mis_01_02.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        practice_stim_faces.push(practice_stim_face)
      } else if(j == 7) {
        var practice_stim_face = {
          target: [base_path_face + (i+practice_start_face+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+practice_start_face+1) + '_mis_02_01.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        practice_stim_faces.push(practice_stim_face)
      }
    } 
  }

  var prac_images_face = []
  for (var i = 0; i < practice_stim_faces.length; i++) {
    prac_images_face.push(practice_stim_faces[i].target)
    prac_images_face.push(practice_stim_faces[i].probe)
  }
  //preload images
  jsPsych.pluginAPI.preloadImages(prac_images_face)
  var shuffledStim_face_prac = jsPsych.randomization.repeat(practice_stim_faces, 1);

  var stims_face = []
  for (var i = 0; i < n_base_face; i++) {
    for (var j = 0; j < 8; j++) {
      if (j == 0) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_al_01_01.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        stims_face.push(stim_face)
      } else if (j == 1) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_al_02_02.png'],
          alignment: ['aligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        stims_face.push(stim_face)
      } else if(j == 2) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_al_01_02.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        stims_face.push(stim_face)
      } else if(j == 3) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_al_02_01.png'],
          alignment: ['aligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        stims_face.push(stim_face)
      } else if(j == 4) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_mis_01_01.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['same']
        }
        stims_face.push(stim_face)
      } else if(j == 5) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_mis_02_02.png'],
          alignment: ['misaligned'],
          congruency: ['congruent'],
          type: ['different']
        }
        stims_face.push(stim_face)
      } else if(j == 6) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_mis_01_02.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['same']
        }
        stims_face.push(stim_face)
      } else if(j == 7) {
        var stim_face = {
          target: [base_path_face + (i+1) + '_target_01_01.png'],
          probe: [base_path_face + (i+1) + '_mis_02_01.png'],
          alignment: ['misaligned'],
          congruency: ['incongruent'],
          type: ['different']
        }
        stims_face.push(stim_face)
      }
    } 
  }
    
  var images_face = []
  for (var i = 0; i < stims_face.length; i++) {
    images_face.push(stims_face[i].target)
    images_face.push(stims_face[i].probe)
  }
  //preload images
  jsPsych.pluginAPI.preloadImages(images_face)

  var shuffledStims_face = jsPsych.randomization.repeat(stims_face, 2);


  /* ************************************ */
  /* Set up jsPsych blocks */
  /* ************************************ */

  // Set up general use blocks
  /* define welcome message block */
  var welcome_block = {
    type: "text",
    text: "<p class='legal'; style = font-size:30px>" + 
        "Welcome to the experiment. Press Enter to begin. </p> ",
    cont_key: [13],
    data: {
      rt: -1,
    },
  };

  /* define mask */
  var mask_block = {
    type: 'single-stim',
    timing_response: 400,
    stimulus: getMask,
    data: {trial_id: 'mask'},
    is_html: true,
    choices: 'none',
  };

  /* define debrief and feedback blocks */
  function getSubjectData() {
    var trials = jsPsych.data.getTrialsOfType('single-stim');
    var response_trials = 0;
    var sum_rt = 0;
    var correct_trial_count = 0;
    var correct_rt_count = 0;
    for (var i = 0; i < trials.length; i++) { 
      if(trials[i].rt > -1){
        sum_rt += trials[i].rt;
        correct_rt_count++;
        response_trials++;
        if (trials[i].correct == true) {
          correct_trial_count++;
        }
      }
    }
    return {
      rt: Math.floor(sum_rt / correct_rt_count),
      accuracy: Math.floor(correct_trial_count / response_trials * 100)
    }
  }

  var practice_feedback = {
    
    type: 'single-stim',
    timing_response: 1000,
    stimulus: function() {

      trials = jsPsych.data.getData()
      console.log(feedback_index)
      if (jsPsych.data.getData()[feedback_index].correct) {
        return "<div class = centerbox style = text-align:center><p style = font-size:40px>" +
                "<span class = 'large' style = 'color:green'>Correct!</span> </p></div>";
      } else {
       return "<div class = centerbox style = text-align:center><p style = font-size:40px>" +
                "<span class = 'large' style = 'color:red'>Incorrect</span> </p></div>";
      }
    },
    is_html: true,
    choices: 'none',
    data: {
      rt: -1,
    },

  };

  var debrief_block = {
    type: "text",
    text: function() {
      var subject_data = getSubjectData();
      return "<p class='legal'; style = font-size:25px>You responded correctly on "+subject_data.accuracy+"% of "+
      "the trials.</p><p style = font-size:25px>Your average response time was <strong>" +
      subject_data.rt + "ms</strong>. Press any key to complete the "+
      "experiment. Thank you!</p>";
    }
  };

  // ask subjects if any problems completing the experiment
  var problem_report = {
    type: "survey-text",
    questions: ['<p>Did you run into any issues while completing ' +
                'this study?</p><p>(If yes, please describe)</p>'],
    rows: [10]
  }

  // Set up line task blocks
  /* define instructions block */
  var main_instructions_block_line = {
    type: "text",
    text: "<p class='legal'; style = font-size:20px>This experiment has two parts. Each part will take about 15 minutes. " +
        "In the first part of the experiment, a line pattern will appear in the center " +
        "of the screen. Then you will quickly see a jumbled image, " +
        "followed by another line pattern. Finally, a prompt will appear " +
        "asking 'same or different'</p><p style = font-size:20px>If the <strong>top</strong> half of " +
        "the line pattern was the same as the first line pattern you saw press " +
        "<strong>1</strong>.</p><p style = font-size:20px> If it's different, press <strong>0</strong>" +
        "<p style = font-size:20px>We will start with eight practice trials and then go on to the main experiment." +
        " Press Enter to begin.</p>",
    cont_key: [13],
    timing_post_trial: 2000,
    data: {
      rt: -1,
    },
    on_finish: jsPsych.pluginAPI.preloadImages(prac_images_line)
  };

  /* define instructions block */
  var post_practice_block_line = {
    type: "text",
    text: "<p class='legal'; style = font-size:25px>You have finished the practice. Now we will continue to the first main task. " +
        " This should take about 15 minutes to complete. </p>" +
        "<p style = font-size:25px> Remember, if the top halves are the same press <strong>1</strong>. " +
        "If they are different, press <strong>0</strong>.</p>" +
        "<p style = font-size:25px>Press Enter to begin.</p>",
    cont_key: [13],
    timing_post_trial: 2000,
    data: {
      rt: -1,
    },
    on_finish: jsPsych.pluginAPI.preloadImages(images_line)
  };

  /* define target presentation */
  var target_block_line = {
    type: 'single-stim',
    timing_response: 200,
    stimulus: getTarget_line,
    data: {trial_id: 'target'},
    choices: 'none',
    is_html: true,
  };

  var practice_target_block_line = {
    type: 'single-stim',
    timing_response: 400,
    stimulus: getPracticeTarget_line,
    //data: {
    //  trial_id: 'target',
    //},
    choices: 'none',
    is_html: true,
    data: {
      rt: -1,
    },
  };
  
  /* define probe presentation */
  var probe_block_line = {
    type: 'single-stim',
    timing_response: 200,
    stimulus: getProbe_line,
    data: {trial_id: 'probe'},
    is_html: true,
    choices: 'none',
  };

  var practice_probe_block_line = {
    type: 'single-stim',
    timing_response: 400,
    stimulus: getPracticeProbe_line,
    //data: {trial_id: 'probe'},
    is_html: true,
    choices: 'none',
    data: {
      rt: -1,
    },
  };
 
  /* define response block */
  var response_block_line = {
    type: 'single-stim',
    stimulus: "<div class = centerbox style = text-align:center><p style = font-size:50px>" +
                "Same or different? </p></div>",
    data: {
      trial_id: 'response_line',
    },
    is_html: true,
    choices: [48,49], // Y or N,
    timing_stim: -1,
    timing_post_trial: 1000,


    on_finish: function(data){
 
      var correct = false;

      data.response = shuffledStim_line[curr_trial_line].type;

      if(data.response == 'same' && data.key_press == "49"){
        correct = true;
      } else if(data.response == 'different' && data.key_press == "48"){
        correct = true;
      }
      jsPsych.data.addDataToLastTrial({correct: correct});

      jsPsych.data.addDataToLastTrial({alignment: shuffledStim_line[curr_trial_line].alignment});
      jsPsych.data.addDataToLastTrial({congruency: shuffledStim_line[curr_trial_line].congruency});
      
      curr_trial_line++
    },
  };

  var practice_response_block_line = {
    type: 'single-stim',
    stimulus: "<div class = centerbox style = text-align:center><p style = font-size:50px>" +
                "Same or different? </p></div>",
    is_html: true,
    choices: [48,49], // Y or N,
    timing_stim: -1,
    timing_post_trial: 500,
    data: {
      rt: -1,
    },

    on_finish: function(data){
 
      var correct = false;

      data.response = shuffledStim_line_prac[prac_trial_line].type;

      if(data.response == 'same' && data.key_press == "49"){
        correct = true;
      } else if(data.response == 'different' && data.key_press == "48"){
        correct = true;
      }
      jsPsych.data.addDataToLastTrial({correct: correct});

      feedback_index = data.trial_index

      prac_trial_line++
    },
  };

  // Define face blocks
  /* define instructions block */
  var main_instructions_block_face = {
    type: "text",
    text: "<p class='legal'; style = font-size:20px>Great, you are now halfway done! Feel free to take a quick break before continuing. " +
        "When you are ready, we will continue to the second part " +
        "of the experiment</p><p style = font-size:20px>This will be the same as the " +
        "task you just completed, except that you will " +
        "see faces instead of line patterns.</p><p style = font-size:20px>A face will appear in the center " +
        "of the screen. Then you will quickly see a jumbled image, " +
        "followed by another face pattern. Finally, a prompt will appear " +
        "asking 'same or different'</p><p style = font-size:20px>If the <strong>top</strong> half of " +
        "the face was the same as the first face you saw press " +
        "<strong>1</strong>.</p><p style = font-size:20px> If it's different, press <strong>0</strong>. " +
        "Press any Enter to start with four practice trials.</p>",
    cont_key: [13],
    timing_post_trial: 2000,
    data: {
      rt: -1,
    },
    on_finish: jsPsych.pluginAPI.preloadImages(prac_images_face)
  };

  var post_practice_block_face = {
    type: "text",
    text: "<p class='legal'; style = font-size:25px>You have finished the practice. When you are ready, we will " +
        " continue with the second main task. This should take about 15 minutes to complete. </p>" +
        "<p style = font-size:25px> Remember, if the top halves are the same press <strong>1</strong>. " +
        "If they are different, press <strong>0</strong>.</p>" +
        "<p style = font-size:25px>Press Enter to begin.</p>",
    cont_key: [13],
    timing_post_trial: 2000,
    data: {
      rt: -1,
    },
    on_finish: jsPsych.pluginAPI.preloadImages(images_face)
  };

  /* define target presentation */
  var target_block_face = {
    type: 'single-stim',
    timing_response: 200,
    stimulus: getTarget_face,
    data: {trial_id: 'target'},
    choices: 'none',
    is_html: true,
  };

  var practice_target_block_face = {
    type: 'single-stim',
    timing_response: 400,
    stimulus: getPracticeTarget_face,
    //data: {
    //  trial_id: 'target',
    //},
    choices: 'none',
    is_html: true,
    data: {
      rt: -1,
    },
  };
 
  /* define probe presentation */
  var probe_block_face = {
    type: 'single-stim',
    timing_response: 200,
    stimulus: getProbe_face,
    data: {trial_id: 'probe'},
    is_html: true,
    choices: 'none',
  };

  var practice_probe_block_face = {
    type: 'single-stim',
    timing_response: 400,
    stimulus: getPracticeProbe_face,
    //data: {trial_id: 'probe'},
    is_html: true,
    choices: 'none',
    data: {
      rt: -1,
    },
  };

  /* define response block */
  var response_block_face = {
    type: 'single-stim',
    stimulus: "<div class = centerbox style = text-align:center><p style = font-size:50px>" +
                "Same or different? </p></div>",
    data: {
      trial_id: 'response_face',
    },
    is_html: true,
    choices: [48,49], // Y or N,
    timing_stim: -1,
    timing_post_trial: 1000,


    on_finish: function(data){
 
      var correct = false;

      data.response = shuffledStims_face[curr_trial_face].type;

      if(data.response == 'same' && data.key_press == "49"){
        correct = true;
      } else if(data.response == 'different' && data.key_press == "48"){
        correct = true;
      }
      jsPsych.data.addDataToLastTrial({correct: correct});

      jsPsych.data.addDataToLastTrial({alignment: shuffledStims_face[curr_trial_face].alignment});
      jsPsych.data.addDataToLastTrial({congruency: shuffledStims_face[curr_trial_face].congruency});
      
      curr_trial_face++
    },
  };

  var practice_response_block_face = {
    type: 'single-stim',
    stimulus: "<div class = centerbox style = text-align:center><p style = font-size:50px>" +
                "Same or different? </p></div>",
    is_html: true,
    choices: [48,49], // Y or N,
    timing_stim: -1,
    timing_post_trial: 500,
    data: {
      rt: -1,
    },

    on_finish: function(data){
 
      var correct = false;

      data.response = shuffledStim_face_prac[prac_trial_face].type;

      if(data.response == 'same' && data.key_press == "49"){
        correct = true;
      } else if(data.response == 'different' && data.key_press == "48"){
        correct = true;
      }
      jsPsych.data.addDataToLastTrial({correct: correct});

      feedback_index = data.trial_index

      prac_trial_face++
    },
  };

  /* create experiment timeline array */
  var experiment = [];
  experiment.push(welcome_block);
  experiment.push(main_instructions_block_line);
  for (var i = 0; i < practice_length_line; i++) {
    experiment.push(practice_target_block_line)
    experiment.push(mask_block)
    experiment.push(practice_probe_block_line);
    experiment.push(practice_response_block_line);
    experiment.push(practice_feedback);
  }
  experiment.push(post_practice_block_line);
  for (var i = 0; i < test_length_line; i++) {
    experiment.push(target_block_line)
    experiment.push(mask_block)
    experiment.push(probe_block_line);
    experiment.push(response_block_line);
  }
  experiment.push(main_instructions_block_face);
  for (var i = 0; i < practice_length_face; i++) {
    experiment.push(practice_target_block_face)
    experiment.push(mask_block)
    experiment.push(practice_probe_block_face);
    experiment.push(practice_response_block_face);
    experiment.push(practice_feedback);
  }
  experiment.push(post_practice_block_face);
  for (var i = 0; i < test_length_face; i++) {
    experiment.push(target_block_face)
    experiment.push(mask_block)
    experiment.push(probe_block_face);
    experiment.push(response_block_face);
  }
  experiment.push(problem_report); 
  experiment.push(debrief_block); 
  //add debrief block etc
  