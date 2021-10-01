import lemonade from 'lemonadejs';

var App = function() {
    let self = {};
    self.count = 1;
    let template = `<div>
        <div><Hello /></div>
        <p>You clicked {{self.count}} times</p>
        <button onclick="self.count++;">Click me</button>
    </div>`;

    return lemonade.element(template, self);
}