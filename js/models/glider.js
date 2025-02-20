var app = app || {};

app.GliderModel = Backbone.Model.extend({
    defaults: {
        name: '',
        weightClass: '',
        weight: 0,
        speedGnd: 0,
        speedWtr: 0,
        speedAir: 0,
        speedGty: 0,
        acceleration: 0,
        weight: 0,
        handlingGnd: 0,
        handlingWtr: 0,
        handlingAir: 0,
        handlingGty: 0,
        grip: 0,
        miniturbo: 0,
        invincibility: 0
    }
});