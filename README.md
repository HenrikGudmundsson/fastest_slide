# So you like to slide pyramids? 

## Prerequisites
- `Node.js` version > `v16.0.0`
- Text file containing the pyramid data: Starting with a row only containing a number representing the pyramid's amount of layers, and then one layer per pyramid row with spaces between the values per layer. An example text file `pyramid.txt` is to be found, within the folder `./example_data` in the project's root.

    Example:
    ```
    4
    1
    2 3
    4 5 6
    7 8 9 10
    ```
 
## Instructions
1. Clone the repo
2. Install the projects dependencies with: `npm i`
3. Execute the program by running: `node <path-to-project> <path-to-pyramid-text-file>`. 

    ### Example
    If you stand in the same folder where the repo was cloned into:
    ```
    node ./fastest_slide ./fastest_slide/example_data/pyramid.txt
    ````

### Happy sliding!