$(function() {
	window.App = {
		Models: {},
		Views: {},
		Collections: {}
	};
	
	window.template = function (id) {
		return _.template($('#' + id).html());
	};
	
	App.Models.Product = Backbone.Model.extend({
		initialize: function() {
			console.log('Модель Продукт создана')
		}
	});
	
	App.Views.Product = Backbone.View.extend({
		className: 'product_div',
		tagName: 'div',
		template: template('productsTemplate'),
		initialize: function() {
            this.$el.addClass(this.model.get('className'));
        },
		render: function() {
			var template = this.template(this.model.toJSON());
			this.$el.html(template);
			return this;
		}
	});
	
	App.Collections.ProductCollection = Backbone.Collection.extend({
		model: App.Models.Product
	});
	
	App.Views.Products = Backbone.View.extend({
		tagName: 'div',
		render: function() {
			this.collection.each(this.addOne, this);
			return this;
		},
		addOne: function(product) {
			var productView = new App.Views.Product({model: product});
			this.$el.append(productView.render().el);
		}
	});

});


/*
$(function() {

    App.Views.Menu = Backbone.View.extend({
        initialize: function() {
            this.$el.addClass(this.model.get('className'));
        },
        events: {
            'click': 'clickOn'
        },
        clickOn: function() {
            this.model.attributes.clickOnMenu();
        }
    });

    //   $('.tasks').append(tasksView.render().el);
    // console.log(tasksView.el);
}); */