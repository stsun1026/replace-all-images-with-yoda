# Replace All Images With Closeup of Yoda
Enhance your web browsing experience by replacing all images with a close up of Yoda's face.

## How to use
This script is formatted as a [Tampermonkey](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en) script but can (probably) be used by any script manager.

1. Download the script (replace-all-images.user.js)
2. Download the [Tampermonkey extension](https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo?hl=en)
3. Add the script to Tampermonkey

That's it! Congratulations your browsing experience has been enhanced. There is no reason to ever not use this script for any website.

### Customizations
There are a few constants at the top of the script you can modify to fit your needs.
| Constant           | What it does                                                                                                                                                                                                                                                                                         |
|--------------------|------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| IMAGE_URL          | The source of the image. You can change this url to anything and all the images will be replaced by the image of your new url.                                                                                                                                                                       |
| INITIAL_DELAY_MS   | This is the initial delay of the first time this script runs its function to replace all the images with Yoda. This is because some elements take some time to load and we want to Yodafy as many images as we can on the first run. With that said if you don't want a delay you can set this to 0. |
| NUMBER_OF_RUNS     | Some websites will dynamically load more images (e.g. when you scroll down), so we may have to run the image replacement function multiple times to make sure we only see Yoda. This represents how many times we are running the function.                                                          |
| DELAY_BETWEEN_RUNS | This will represent the delay between each run of the script.                                                                                                                                                                                                                                        |
#### Some considerations around re-running the script
I have set my number of runs to a conservative 5 times, and the delay to 5000ms. This means this script will run 5 times in 25 seconds in 5 second intervals. This means dynamically generated images can take up to 5 seconds to be replaced by Yoda, and any images generated after 25s will not be replaced. You can of course improve your experience by increasing `NUMBER_OF_RUNS` and reducing `DELAY_BETWEEN_RUNS`. Keep in mind the more you increase the number of runs, the more resources it will take.

## Examples of the enhanced browsing experience
Here are some examples on popular websites with and without this script. I think you will truly appreciate what this script can bring to you.

amazon.com (without script)

![amazon-unenhanced](https://github.com/stsun1026/replace-all-images-with-yoda/blob/master/examples/amazon-unenhanced.PNG)

amazon.com (with script)

![amazon-enhanced](https://github.com/stsun1026/replace-all-images-with-yoda/blob/master/examples/amazon-enhanced.PNG)
