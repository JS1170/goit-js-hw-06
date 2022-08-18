const counterValue = function ({
    rootSelector,
    initialValue = 0,
    step = 1,
} = {}) {
    this._value = initialValue;
    this._step = step;

    this._refs = this._getRefs(rootSelector);

    this._bindEvents();
};

counterValue.prototype._bindEvents = function () {
    this._refs.incrementBtn.addEventListener('click', () => {
        console.log ('counterValue.prototype._bindEvents -> this', this)
        this.increment();
        this.updateValueCounter();
    });

    this._refs.decrementBtn.addEventListener('click', () => {
        console.log ('counterValue.prototype._bindEvents -> this', this)
        this.decrement();
        this.updateValueCounter();
    });

}

counterValue.prototype.updateValueCounter = function () {
    this._refs.value.textContent = this._value;
}


counterValue.prototype._getRefs = function (rootSelector) {
 
    const refs = {};
    refs.container = document.querySelector(rootSelector);
    refs.decrementBtn = refs.container.querySelector('[data-action="decrement"]');
    refs.incrementBtn = refs.container.querySelector('[data-action="increment"]');
    refs.value = refs.container.querySelector("#value");

    return refs;
}

counterValue.prototype.increment = function () {
    this._value += this._step;
};

counterValue.prototype.decrement = function () {
    this._value -= this._step;
};

const counter = new counterValue({ rootSelector: '#counter'});

console.log(counter);
