/**
 * Gravity
 */

var Humble = {};
Humble.Gravity = {};

Humble.Gravity.gravity = function () {

    this.id     = 'gravity';
    this.canvas = null;
    this.context    = null;

    this.width = 600;
    this.height = 480;


    this.constructor();
};

Humble.Gravity.gravity.prototype = {

    constructor : function () {

        this._initCanvas();

        var context = this.context,
            controller = new Humble.Gravity.Particle.controller(context),
            model = controller.getModel();

        for (i = 0; i < 1000; i++) {

            var x, y, r;

            x = Math.floor(Math.random() * this.width);
            y = Math.floor(Math.random() * this.height);
            r = Math.floor(10 - Math.log(Math.random() * 1000));

            model.addParticle(x, y, r);
        }

        var d = new Date(),
            start = d.getTime(),
            end = 0;
        controller.render();
        d = new Date();
        end = d.getTime();

//        console.log('Render Time: '+(end-start));
        

        this.controller = controller;
    },

    _initCanvas : function () {

        var canvas  = document.getElementById(this.id),
            context     = canvas.getContext('2d');

        canvas.width = this.width;
        canvas.height = this.height;

        this.canvas = canvas;
        this.context    = context;
    }
};
