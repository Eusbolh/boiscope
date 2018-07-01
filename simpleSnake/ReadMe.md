## Simple Snake Game with JavaScript

* Big part of code is copied from the Youtube Channel Chris DeLeon of Gamkedo's "[Coding "Snake" in 4 min 30 sec (plain browser JavaScript)](https://www.youtube.com/watch?v=xGmXxpIj6vs)"

* I'm trying to improve to code and fix the bugs for just fun, feel free to contribute!

---

### BUGS

* Scorejumps - reason is unidentified
    - I think I solved the scorejump problem. It seems like the problem was not about actual scorejumps, instead the problem was about not resetting the score after a death.
* New baits on tail - reason is unidentified

---

### Captain's Log
* [07.06] When user press the space button -which is assigned for pause-, there will be the sentence "Paused" in the middle of the game screen.
    - There still exist a problem for middling the sentence, I fixed it by coordinates, but it still needs an adjustment or complete solutiion.
* [07.06] Canvas is centered. It happened with actually in a weird way. I didn't think "text-align" style method would work for this problem. Whatever.. It's solved. Maybe I can look for a better solution.
* [08.06] Pause text's visual is changed. I think that it much more acceptable than the previous one.

* [30.06] There are some questions in my mind. (about daily news image) 
    - (+) First of all, how can we take a snapshot/screenshot of canvas or convert canvas to png image? (Right click, save image as. LOL :D)
    - Secondly, what will positions be? I mean, there should be a some kind of hierarchy between sections.
* [30.06] Currently, these are which I know:
    - I can adjust the position of texts. 
    - Centered horizontal black lines will be fine. But how about orange lines? They are not centered, so I should find a proper way to adjust them. (I might be find the way of doing this. I guess, rectangles are defined with a coordinate and two other fields which define the distance to right and down)
    - Adjusting positions could be done with this steps:
        (1) Start with a fixed position.
        (2) Write everything consequently with no break between them.
        (3) After the job is done, adjust the break between items according the left space at down.
* [30.06] Fields/variables which I need:
    - Rather than adding section each time, I can predefine 4-5 sections. Because adding them from scratch could cause a problem.
    - Each section should have these fields:
        + Visible(Boolean)
        + Title
        + Content
            ? Here, thats a little problem. How can I define a section without knowing how much item is in?
            ? Other question is knowing the length of a line. I can use a font like VS Code use, but is there a solution other than this.
    - Add a section button for types.
    - Add a horizontal black line button for sections which have more than one news.