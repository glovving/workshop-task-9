# workshop-task-9
# Live Video Capture
Link to completed website here -> (add page)

## Goals for this workshop
- Make an experimental 'smart mirror' using live video capture.
- Include manipulations at the level of the pixel.
- Make a new repository for your p5.js project on your GitHub account, publish your sketch as a webpage, and include a README file in your repository with a URL to the webpage along with documentation of your work.

## Planning
For this workshop I had a very limited amount of time so I decided that I would begin my copying Leo's code from the demonstration 1:1, then once I had that website functioning I would modify the code and add extra details.

## Testing Leo's code
I copied Leo's code from the demonstration and opened the website in my browser to confirm it was working.
This is what it looked like (below):

<img src="documentation/leo_example_workinf.png" alt="Notes" width="300">

## Modifying code experiments
### Invert filter
First I tried applying an invert filter, I did this by applying an invert filter in the draw function.

<img src="documentation/invert_test.png" alt="Notes" width="300"><img src="documentation/invert_test_code.png" alt="Notes" width="300">

The result is shown on the above left picture, the filter did apply but it did not look the way I want it to.
I'm wasn't sure what the reason was so I decided to try out drawing the ellipses with inverted rgb values rather than using the filter.

<img src="documentation/correct_invert_code.png" alt="Notes" width="300">

This was the result:

<img src="documentation/correct_invert_pic.png" alt="Notes" width="300">

I was much happier with this, so I used this approach rather than the filter.

To toggle the invert filter on and off, I added a mousePressed() function and a boolean variable that would turn the filter on and off.

<img width="220" alt="mouse_pressed_bool" src="https://github.com/user-attachments/assets/9fd07f25-bfda-4b9f-855c-2632d8eaa38c" />

### Adding more shapes
Next I wanted to add more shapes to the sketch, so I changed the Ball class into the Shape class and the ball array into the shape array.

Next I generated a random number from 1 to 3 within the for loop ion the setup() function (below, right), then depending on the value, drew the shape assigned to it within the Shape class show() function (below, left).

<img width="317" alt="add_r_shape_setup" src="https://github.com/user-attachments/assets/a6e22258-7e79-48d6-a164-7429063ad2cb" /><img src="documentation/r_shape_not_working_code.png" alt="Notes" width="300">

I initially made a mistake here by trying to add my r_shape_num variable to my Shape class like this:

<img width="278" alt="r_shape_cons" src="https://github.com/user-attachments/assets/741123de-2692-4fd8-9a48-d230e69c6e5b" />

This caused my screen to look like this:

<img src="documentation/r_shape_not_working_cam.png" alt="Notes" width="300">

There were no shapes drawing, and clicking the screen to turn the invert filter was not working.
I tried drawing my shapes outside the if statements, and they worked so I had a look at the shape class again and figured it out.
After rewriting my code to:

<img width="241" alt="thisr" src="https://github.com/user-attachments/assets/eaa993b4-45c8-4e06-b4b4-8579dd29d31e" />

The shapes drew as I wanted them to:

<img src="documentation/random_shapes_success_vis.png" alt="Notes" width="300">

### Adding more filters
I then decided to add more filters.
To do this I generated a random value from 1 to 6 in the mousePressed() function

<img width="163" alt="global_rand_effect_var" src="https://github.com/user-attachments/assets/a5d3d72a-f9fa-4ca2-a53c-ee64c77ff026" />
<img width="223" alt="rand_ee" src="https://github.com/user-attachments/assets/0cf759c5-36a9-4d62-a8eb-06cb6e772e48" />

A filter is applied in the draw function based on the random value.

<img width="169" alt="if_filter_code" src="https://github.com/user-attachments/assets/5d4a305c-9c5a-4ec6-9f54-69515927a6f5" />

Below are some examples of what the filters look like:
left = blur, middle = erod, right = posterize.

<img width="298" alt="blur_filter_vis" src="https://github.com/user-attachments/assets/5ccfad0c-85ac-432c-8d45-fbfe34dc6aac" />

<img width="301" alt="erod_filter_vis" src="https://github.com/user-attachments/assets/210b6c0b-71bb-4e50-b12e-a4c1781b1299" />

<img width="301" alt="posterize_effect_rshape" src="https://github.com/user-attachments/assets/998c0255-c29d-4f22-8e08-c6ef4dee4399" />

### Adding text and final touches

My live video feed was working as I wanted it to now.
I added some text to the screen:

<img width="380" alt="text_added_code" src="https://github.com/user-attachments/assets/a7f727ef-4e4a-48db-8451-8599c2ad405b" />

And moved my canvas into the middle of the screen like a real mirror:

<img width="380" alt="canvas_pos" src="https://github.com/user-attachments/assets/ddbf467f-94ce-4916-994f-0f15cee803e3" />

<img width="808" alt="mirror" src="https://github.com/user-attachments/assets/5dcfedf1-8df4-473d-8fe1-d2c53319d829" />

I also added a song:

<img width="194" alt="song_loop_added" src="https://github.com/user-attachments/assets/7663a8ec-544a-4fbf-8f0f-72a45f21ff9c" />

Link to the song -> (https://www.youtube.com/watch?v=I8KmHPct_es), I am not the creator of the song, it belongs to Bogdan Razynski.

















