/**
 * Particle View
 */

typedef ('Humble.Gravity.Particle.view', function () {
    
    var view = function (context) {

    // Members
        this.context = context;

    // Construct
        this.constructor();
    };

    // Methods
    view.prototype = {

        constructor : function () {
        },

        /**
         * Draw a particle
         *
         * @param Particle particle
         */
        draw : function (particle) {

            var context = this.context;

            var r, g;
            r = Math.floor(Math.random(0)*256);
            g = Math.floor(Math.random(0)*256);

            if (r < g) {
                swap = r;
                r = g;
                g = r;
            }

            r = r.toString(16);
            if (r.length == 1) {
                r = '0'+r;
            };
            g = g.toString(16);
            if (g.length == 1) {
                g = '0'+g;
            };

            context.fillStyle = '#'+r+g+'00';

            //context.fillStyle = '#ffffff';
            context.beginPath();
            context.arc(particle.x, particle.y, particle.r, 0, 360, 1);
            context.fill();
            context.closePath();
        }

    };

    return view;
});

