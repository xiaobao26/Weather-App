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
                
# Step2: 
## Features
    - To make the background color cover the full screen, using the class '**min-h-screen**' which sets the minimum height to 100vh (100% of the viewport height). This ensures that the    element will cover the entire height of the screen.
    
    
