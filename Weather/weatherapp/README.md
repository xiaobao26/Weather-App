# Step1: Break the UI into a component hierarchy 
![alt text](image.png)

### File crate
```plaintext`
- weatherapp
    -src
      -assets
        ...
      -Component
        -BackgroundImage
            -BackgroundImage.js
            -index.js
        -WeatherCard
            -Component
                -CurrentCity
                -Forest
                -SearchBar
                -OtherCity
            -WeatherCard.js
            -index.js
                
# Step2: Finish background  
## Key-points
    - To make the background color cover the full screen, using the class **'min-h-screen'** which sets the minimum height to 100vh (100% of the viewport height). This ensures that the    element will cover the entire height of the screen.
    
    - make the bg-img on the bottom-right position
    ```js
        position: 'absolute',
        bottom: 0,
        right: 0
    ```

# Step3: Finish Weather card  
## Key-points
    - using 'flex' make the 'weathercard-container' center in the page
    - then using 'grid' to layout the card
    - make the background color become transparent:  background-color: rgba(255, 255, 255, 0.9);
    

