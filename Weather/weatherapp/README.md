Step1: Break the UI into a component hierarchy 
![alt text](image.png)

```plaintext
weatherapp
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
                
