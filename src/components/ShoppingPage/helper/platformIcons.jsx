const platformIcons = {

    'pc': {
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path fill="#FFFFFF" d='M3,12V6.75L9,5.43V11.91L3,12M20,3V11.75L10,11.9V5.21L20,3M3,13L9,13.09V19.9L3,18.75V13M20,13.25V22L10,20.09V13.1L20,13.25Z' />
            </svg>
            ),
        title: "PC"
    },
    'xbox-one': {
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path fill="#FFFFFF" d='M6.43,3.72C6.5,3.66 6.57,3.6 6.62,3.56C8.18,2.55 10,2 12,2C13.88,2 15.64,2.5 17.14,3.42C17.25,3.5 17.54,3.69 17.7,3.88C16.25,2.28 12,5.7 12,5.7C10.5,4.57 9.17,3.8 8.16,3.5C7.31,3.29 6.73,3.5 6.46,3.7M19.34,5.21C19.29,5.16 19.24,5.11 19.2,5.06C18.84,4.66 18.38,4.56 18,4.59C17.61,4.71 15.9,5.32 13.8,7.31C13.8,7.31 16.17,9.61 17.62,11.96C19.07,14.31 19.93,16.16 19.4,18.73C21,16.95 22,14.59 22,12C22,9.38 21,7 19.34,5.21M15.73,12.96C15.08,12.24 14.13,11.21 12.86,9.95C12.59,9.68 12.3,9.4 12,9.1C12,9.1 11.53,9.56 10.93,10.17C10.16,10.94 9.17,11.95 8.61,12.54C7.63,13.59 4.81,16.89 4.65,18.74C4.65,18.74 4,17.28 5.4,13.89C6.3,11.68 9,8.36 10.15,7.28C10.15,7.28 9.12,6.14 7.82,5.35L7.77,5.32C7.14,4.95 6.46,4.66 5.8,4.62C5.13,4.67 4.71,5.16 4.71,5.16C3.03,6.95 2,9.35 2,12A10,10 0 0,0 12,22C14.93,22 17.57,20.74 19.4,18.73C19.4,18.73 19.19,17.4 17.84,15.5C17.53,15.07 16.37,13.69 15.73,12.96Z' />
            </svg>
        ),
        title: "Xbox"
    },
    'playstation': {
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path fill="#FFFFFF" d='M9.5,4.27C10.88,4.53 12.9,5.14 14,5.5C16.75,6.45 17.69,7.63 17.69,10.29C17.69,12.89 16.09,13.87 14.05,12.89V8.05C14.05,7.5 13.95,6.97 13.41,6.82C13,6.69 12.76,7.07 12.76,7.63V19.73L9.5,18.69V4.27M13.37,17.62L18.62,15.75C19.22,15.54 19.31,15.24 18.83,15.08C18.34,14.92 17.47,14.97 16.87,15.18L13.37,16.41V14.45L13.58,14.38C13.58,14.38 14.59,14 16,13.87C17.43,13.71 19.17,13.89 20.53,14.4C22.07,14.89 22.25,15.61 21.86,16.1C21.46,16.6 20.5,16.95 20.5,16.95L13.37,19.5V17.62M3.5,17.42C1.93,17 1.66,16.05 2.38,15.5C3.05,15 4.18,14.65 4.18,14.65L8.86,13V14.88L5.5,16.09C4.9,16.3 4.81,16.6 5.29,16.76C5.77,16.92 6.65,16.88 7.24,16.66L8.86,16.08V17.77L8.54,17.83C6.92,18.09 5.2,18 3.5,17.42Z' />
            </svg>
        ),
        title: "Playstation"
    },
    'ios':{
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path fill="#FFFFFF" d='M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z' />
            </svg>
        ),
        title: "Apple"
    },
    'android':{
        icon: (
            <svg className='games-page__game-card-platform-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'>
                <path fill="#FFFFFF" d='M16.61 15.15C16.15 15.15 15.77 14.78 15.77 14.32S16.15 13.5 16.61 13.5H16.61C17.07 13.5 17.45 13.86 17.45 14.32C17.45 14.78 17.07 15.15 16.61 15.15M7.41 15.15C6.95 15.15 6.57 14.78 6.57 14.32C6.57 13.86 6.95 13.5 7.41 13.5H7.41C7.87 13.5 8.24 13.86 8.24 14.32C8.24 14.78 7.87 15.15 7.41 15.15M16.91 10.14L18.58 7.26C18.67 7.09 18.61 6.88 18.45 6.79C18.28 6.69 18.07 6.75 18 6.92L16.29 9.83C14.95 9.22 13.5 8.9 12 8.91C10.47 8.91 9 9.24 7.73 9.82L6.04 6.91C5.95 6.74 5.74 6.68 5.57 6.78C5.4 6.87 5.35 7.08 5.44 7.25L7.1 10.13C4.25 11.69 2.29 14.58 2 18H22C21.72 14.59 19.77 11.7 16.91 10.14H16.91Z' />
            </svg>
            ),
        title:"Android"
    },
    'linux':{
        icon: (
            <svg className='games-page__game-card-platform-icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 128 128'>
                <path fill="#FFFFFF" fillRule='evenodd' clipRule='evenodd' d='M113.823 104.595c-1.795-1.478-3.629-2.921-5.308-4.525-1.87-1.785-3.045-3.944-2.789-6.678.147-1.573-.216-2.926-2.113-3.452.446-1.154.864-1.928 1.033-2.753.188-.92.178-1.887.204-2.834.264-9.96-3.334-18.691-8.663-26.835-2.454-3.748-5.017-7.429-7.633-11.066-4.092-5.688-5.559-12.078-5.633-18.981a47.564 47.564 0 00-1.081-9.475C80.527 11.956 77.291 7.233 71.422 4.7c-4.497-1.942-9.152-2.327-13.901-1.084-6.901 1.805-11.074 6.934-10.996 14.088.074 6.885.417 13.779.922 20.648.288 3.893-.312 7.252-2.895 10.34-2.484 2.969-4.706 6.172-6.858 9.397-1.229 1.844-2.317 3.853-3.077 5.931-2.07 5.663-3.973 11.373-7.276 16.5-1.224 1.9-1.363 4.026-.494 6.199.225.563.363 1.429.089 1.882-2.354 3.907-5.011 7.345-10.066 8.095-3.976.591-4.172 1.314-4.051 5.413.1 3.337.061 6.705-.28 10.021-.363 3.555.008 4.521 3.442 5.373 7.924 1.968 15.913 3.647 23.492 6.854 3.227 1.365 6.465.891 9.064-1.763 2.713-2.771 6.141-3.855 9.844-3.859 6.285-.005 12.572.298 18.86.369 1.702.02 2.679.653 3.364 2.199.84 1.893 2.26 3.284 4.445 3.526 4.193.462 8.013-.16 11.19-3.359 3.918-3.948 8.436-7.066 13.615-9.227 1.482-.619 2.878-1.592 4.103-2.648 2.231-1.922 2.113-3.146-.135-5zM62.426 24.12c.758-2.601 2.537-4.289 5.243-4.801 2.276-.43 4.203.688 5.639 3.246 1.546 2.758 2.054 5.64.734 8.658-1.083 2.474-1.591 2.707-4.123 1.868-.474-.157-.937-.343-1.777-.652.708-.594 1.154-1.035 1.664-1.382 1.134-.772 1.452-1.858 1.346-3.148-.139-1.694-1.471-3.194-2.837-3.175-1.225.017-2.262 1.167-2.4 2.915-.086 1.089.095 2.199.173 3.589-3.446-1.023-4.711-3.525-3.662-7.118zm-12.75-2.251c1.274-1.928 3.197-2.314 5.101-1.024 2.029 1.376 3.547 5.256 2.763 7.576-.285.844-1.127 1.5-1.716 2.241l-.604-.374c-.23-1.253-.276-2.585-.757-3.733-.304-.728-1.257-1.184-1.919-1.762-.622.739-1.693 1.443-1.757 2.228-.088 1.084.477 2.28.969 3.331.311.661 1.001 1.145 1.713 1.916l-1.922 1.51c-3.018-2.7-3.915-8.82-1.871-11.909zM87.34 86.075c-.203 2.604-.5 2.713-3.118 3.098-1.859.272-2.359.756-2.453 2.964a101.744 101.744 0 00-.012 7.753c.061 1.77-.537 3.158-1.755 4.393-6.764 6.856-14.845 10.105-24.512 8.926-4.17-.509-6.896-3.047-9.097-6.639.98-.363 1.705-.607 2.412-.894 3.122-1.27 3.706-3.955 1.213-6.277-1.884-1.757-3.986-3.283-6.007-4.892-1.954-1.555-3.934-3.078-5.891-4.629-1.668-1.323-2.305-3.028-2.345-5.188-.094-5.182.972-10.03 3.138-14.747 1.932-4.209 3.429-8.617 5.239-12.885.935-2.202 1.906-4.455 3.278-6.388 1.319-1.854 2.134-3.669 1.988-5.94-.084-1.276-.016-2.562-.016-3.843l.707-.352c1.141.985 2.302 1.949 3.423 2.959 4.045 3.646 7.892 3.813 12.319.67 1.888-1.341 3.93-2.47 5.927-3.652.497-.294 1.092-.423 1.934-.738 2.151 5.066 4.262 10.033 6.375 15 1.072 2.524 1.932 5.167 3.264 7.547 2.671 4.775 4.092 9.813 4.07 15.272-.012 2.83.137 5.67-.081 8.482z' />
            </svg>
        ),
        title: "Linux"

    },
    'nintendo':{
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 16">
            <path fill="#FFFFFF" d="M8 0h5a8 8 0 110 16H8A8 8 0 118 0zm-.135 1.935a6.065 6.065 0 000 12.13h5.12a6.065 6.065 0 000-12.13h-5.12zm-1.33 2.304h2.401l3.199 5.175V4.24h2.346v7.495H12.18L8.864 6.537v5.201H6.53l.005-7.499z" />
            </svg>
        ),
        title: "Nintendo"

    },
    'sega':{
        icon: (
            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 14 14'>
                <path fill="#FFFFFF" d='m 11.61475,3.07 -0.003,1.665 -5.3,0 c -0.1095,0 -0.1985,0.0905 -0.1985,0.1995 0,0.1105 0.09,0.1995 0.1985,0.1995 l 1.38,-0.008 c 2.173,0 3.934,1.7625 3.934,3.9345 0,2.174 -1.761,3.9345 -3.9345,3.9345 l -5.317,0.005 0.0025,-1.6875 5.3175,0 c 1.2435,0 2.252,-1.008 2.252,-2.252 0,-1.245 -1.0085,-2.253 -2.253,-2.253 l -1.3855,-0.015 c -1.03,0 -1.8635,-0.833 -1.8635,-1.86 0,-1.0305 0.833,-1.863 1.8615,-1.863 l 5.309,0 z m -9.233,7.8515 -0.002,-1.6655 5.3045,0 c 0.105,0 0.1915,-0.0875 0.1915,-0.1935 0,-0.1065 -0.0865,-0.1925 -0.192,-0.1925 l -1.372,0 C 4.13925,8.87 2.37825,7.1075 2.37825,4.9345 2.37825,2.7615 4.13925,1 6.31175,1 l 5.3,0.0015 0.003,1.675 -5.302,0.0015 c -1.245,0 -2.25,1.0095 -2.25,2.2535 0,1.2445 1.012,2.252 2.2575,2.252 l 1.3875,0.015 c 1.0275,0 1.86,0.834 1.86,1.862 0,1.0275 -0.8325,1.8595 -1.86,1.8595 l -5.325,0 -0.001,0.0015 z' />
            </svg>
        ),
        title: "Sega"
    },
};


platformIcons['web'] = platformIcons['pc'];

platformIcons['xbox-old'] = platformIcons['xbox-one'];
platformIcons['xbox-series-x'] = platformIcons['xbox-one'];
platformIcons['xbox360'] = platformIcons['xbox-one'];

platformIcons['playstation2'] = platformIcons['playstation'];
platformIcons['playstation3'] = platformIcons['playstation'];
platformIcons['playstation4'] = platformIcons['playstation'];
platformIcons['playstation5'] = platformIcons['playstation'];
platformIcons['ps-vita'] = platformIcons['playstation'];
platformIcons['psp'] = platformIcons['playstation'];

platformIcons['macos'] = platformIcons['ios'];
platformIcons['apple-ii'] = platformIcons['ios'];
platformIcons['macintosh'] = platformIcons['ios'];

platformIcons['nintendo-switch'] = platformIcons['nintendo'];
platformIcons['nintendo-3ds'] = platformIcons['nintendo'];
platformIcons['nintendo-ds'] = platformIcons['nintendo'];
platformIcons['nintendo-dsi'] = platformIcons['nintendo'];
platformIcons['nintendo-64'] = platformIcons['nintendo'];
platformIcons['wii'] = platformIcons['nintendo'];
platformIcons['wii-u'] = platformIcons['nintendo'];
platformIcons['gamecube'] = platformIcons['nintendo'];
platformIcons['game-boy'] = platformIcons['nintendo'];
platformIcons['game-boy-color'] = platformIcons['nintendo'];
platformIcons['game-boy-advance'] = platformIcons['nintendo'];
platformIcons['snes'] = platformIcons['nintendo'];
platformIcons['nes'] = platformIcons['nintendo'];

platformIcons['genesis'] = platformIcons['sega'];
platformIcons['sega-saturn'] = platformIcons['sega'];
platformIcons['sega-cd'] = platformIcons['sega'];
platformIcons['sega-32x'] = platformIcons['sega'];
platformIcons['sega-master-system'] = platformIcons['sega'];
platformIcons['dreamcast'] = platformIcons['sega'];
platformIcons['game-gear'] = platformIcons['sega'];


export {platformIcons};