function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function splide() {
    var splide__software = new Splide('#splide__software', {
        type: 'loop',
        autoWidth: true,
        autoHeight: true,
        perPage: 2,
        perMove: 1,
        drag: 'free',
        snap: true,
        padding: {right: '50px'},
        gap: '50px',
        pagination: false,
    })

    var bar = splide__software.root.querySelector('.my-slider-progress-bar');
    splide__software.on( 'mounted moved', function () {
        var end  = splide__software.Components.Controller.getEnd() + 1;
        var rate = Math.min( ( splide__software.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
    } );
    splide__software.on( 'mounted dragged', async function () {
        await sleep(1000)
        var end  = splide__software.Components.Controller.getEnd() + 1;
        var rate = Math.min( ( splide__software.index + 1 ) / end, 1 );
        bar.style.width = String( 100 * rate ) + '%';
    } );
    
    splide__software.mount()
   
   
    var splide__drawing = new Splide('#splide__drawing', {
        type: 'loop',
        autoWidth: true,
        perPage: 2,
        perMove: 1,
        drag: 'free',
        snap: true,
        padding: {right: '50px'},
        gap: '50px',
        pagination: false,
    })

    var bar__drawing = splide__drawing.root.querySelector('.my-slider-progress-bar');
    splide__drawing.on( 'mounted move', function () {
        var end  = splide__drawing.Components.Controller.getEnd() + 1;
        var rate = Math.min( ( splide__drawing.index + 1 ) / end, 1 );
        bar__drawing.style.width = String( 100 * rate ) + '%';
    } );
    splide__drawing.on( 'mounted dragged', async function () {
        await sleep(1000)
        var end  = splide__drawing.Components.Controller.getEnd() + 1;
        var rate = Math.min( ( splide__drawing.index + 1 ) / end, 1 );
        bar__drawing.style.width = String( 100 * rate ) + '%';
    } );

    splide__drawing.mount()
}

splide()