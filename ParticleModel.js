/**
 * Particle Model
 */

typedef ('Humble.Gravity.Particle.model', function () {

    var model = function () {

    // Members
        this.particles = [];

    // Construct
        this.constructor();
    };

    // Methods
    model.prototype = {

        constructor : function () {

        },

        getParticles : function () {
            return this.particles;
        },

        addParticle : function (x, y, r) {

            var particle = {};

            particle.x = x;
            particle.y = y;
            particle.r = r;

            this.particles.push(particle);
        }
    };

    return model;
});
