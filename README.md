# Dubhacks-extension

Demo link(https://www.youtube.com/watch?v=GKX-_YjeZio&feature=youtu.be&ab_channel=ScottNi)

How to run on your Chrome?

1. Download and unzip the "ZoomDanmaku" source file
2. Go to chrome://extensions/
3. Make sure you have selected "Developer mode"
4. Click "Load unpacked extension..."
5. Then "ZoomDanmaku" should enable. 
6. Then, go to the zoom link and play with our chrom extension! 
7. After installing our package, you can go to this link for demo!
 https://washington.zoom.us/rec/play/-uRwjTdqcO8nXfKYU1NLmhorl0bgJb1yM5NYasPVkOiL0CjkDdnvtRpQgFZEVPwPHBsygCNR8kjEvx4H.sWZ9K2S4aY5fMPqJ



## Inspiration
Living internationally during COVID-19, we watch most of our lectures through recordings. This is not only far from what we will experience in person but also makes students less motivated and engaged. Since we can't make people time travel and make all students attend live classed, we decided to come up with a way to make recordings more interesting and engaging!

## What it does
This Chrome extension we made allows user to give instant feedback during lectures, through either typing or voice recording. These comments will show up in a very fun way: DANMAKU (floating comments)!! All students' input will be recorded and stored so that the next student can see what thoughts they have at that moment of the lecture. It's just like having a class in-person!

## How we built it
We use JavaScript to 
We used Firebase to store danmaku so that the next person can see what the previous person commented.


## Challenges we ran into
One of our original goals was to integrate the google speech=to-text API into our extension. However, due to some extension problems. we weren't able to import the API into our code. Since we are new to Chrome extensions, we still haven't figure out how to do it, but this will be something that we will try to change in the future.

## Accomplishments that we're proud of
We feel like we really achieved out original goal. By having the danmaku's we all felt that the class got a lot more interesting. We also asked some of our peers for opinions and they all thought that this is a pretty interesting and useful extension to have during online classes.

## What we learned
This is the first time for all of us to build a Chrome extension, so it took us some time to understand how it works. Designing database structure was also new to us, so we definitely learned during the process. Adding the danmaku was also a pretty hard task. In order to create danmaku that looks smooth but isn't too distracting, we had to play around with lots of different designs. 

## What's next for Zoom Danmaku
We are planning on adding comment report functions since we understand that there will always be inappropriate comments if we don't try to stop it. We also plan to add different tags for comments so that a user can filter out some of the irrelevant comments. For example, a user can add a comment with a tag: "homework-question". The other user should be able to filter that out with just selecting the "lecture-related" tag. Professors can also have their own tag to give students important messages. Finally, we plan to use machine learning to find out where are the best places to have danmaku so that it doesn't block out important lecture texts.
