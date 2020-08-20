const background_img = styled("div") `
background-image: url(imgs/loficity_background.png) cover;
background-size: 100% 100%;
`
;

// Render
export const render = (dispatch) => {

    return (
        <background_img></background_img>
    );
};

export const refreshFrequency = (1000 * 10);