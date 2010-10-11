/**
 * Particle Controller
 */

typedef ('Humble.Gravity.Particle.controller', function () {

    // Private Members
    var privateMember;

    var controller = function (context) {

    // Members
        this.context = context;
        this.model = new Humble.Gravity.Particle.model();
        this.view  = new Humble.Gravity.Particle.view(context);

    // Construct
        this.constructor();
    };

    // Methods
    controller.prototype = {

        constructor : function () {

        },

        render : function () {

            var particles = this.model.getParticles(),
                particle  = null;

            context = this.context;
            for (i in particles) {
                particle = particles[i];
                this.view.draw(particle);
            }
        },

        getModel : function () {
            return this.model;
        }
    }

    return controller;
});
var test = new Humble.Gravity.Particle.controller();
