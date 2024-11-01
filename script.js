@import url('https://fonts.googleapis.com/css?family=Lato:400,700&display=swap');

#body {
  width: 800px;
  margin: 0 auto;
  position: relative;
  font-family: 'Lato', helvetica, arial, sans-serif;
  color: #000;
  padding-left: 400px;
  padding-bottom: 200px;
  padding-top: 10px;
  overflow: visible;
}

rect {
  fill: #1793b8;
  pointer-events: all;
}

svg {
  overflow: visible;
}

.node circle {
  cursor: pointer;
  stroke: #78b332;
  fill: #78b332;
  stroke-width: 10px;
  opacity: 0.8;
}

.node text {
  font-size: 16px;
  font-weight: bold;
  align-text: center;
  background: #1793b8;
}

path.link {
  fill: none;
  stroke: #dfe6ea;
  stroke-width: 6px;
  margin: 10px;
}

.error {
  stroke: red;
  fill: red;
}