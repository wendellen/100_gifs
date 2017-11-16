(function(){

  const options = {
    name: 'Pattern0017',
    numberOfInputs: 0
  }

  var shader = {
    name: options.name,
    numberOfInputs: options.numberOfInputs,
    uniforms: FilterDefinitions._baseUniforms( options.numberOfInputs, {
      time: {value: 100, update: v => {return v+.005}},
      size: {value: 0.5, update: v => { return 2*Math.sin(Date.now()/500)}}
    }),
    vertexShader: FilterDefinitions._baseVertexShader(),
    fragmentShader: `
      /**
      * Example Fragment Shader
      * Sets the color and alpha of the pixel by setting gl_FragColor
      */

      uniform float time;
      uniform float size;
      varying vec2 inputCoord;

      // Example varyings passed from the vertex shader

      void main() {
        vec2 p = (inputCoord.xy) * 2.0 - vec2( 1.0);

        vec2 uv = inputCoord.xy ;
        float z = pow(0.813 + (uv.x * uv.y) * 0.341, 1.153);
        p *= z;

        float a = time * 0.2;
        float cos_a = cos(a);
        float sin_a = sin(a);
        vec2 q;
        q.x = p.x * cos_a + p.y * sin_a;
        q.y = -p.x * sin_a + p.y * cos_a;

        float d = length(q);
        d += sin(sin(q.x * 1.43 - time * 0.671) * -1.7 + time * 0.137 + p.y * 0.432) * size;
        d += sin(sin(q.y * -3.17 + time * 0.592) * 1.3 - time * 0.277 + p.x * 0.317) * size;
        d -= time * 0.01;

        float v = clamp(sin(d * 60.0), 0.0, 1.0);

        vec3 fragColor = vec3(v);
        gl_FragColor = vec4(fragColor.b*sin(time),fragColor.g*cos(time),fragColor.r*atan(time), fragColor.x);
      }
    `
  }

  FilterDefinitions.add(shader)

})()
