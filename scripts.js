// ---------------- CALCULATOR ----------------
const display = document.getElementById('calc-display');
function appendCalc(val) {
    if(val === '%') {
        const num = parseFloat(display.value);
        if(!isNaN(num)) display.value = (num / 100).toFixed(4);
    } else {
        display.value += val;
    }
}
function clearCalc() { display.value = ''; }
function calculateResult() {
    try {
        let expr = display.value.replace('×','*').replace('−','-');
        display.value = eval(expr).toFixed(4).replace(/\.?0+$/, '');
    } catch {
        display.value = 'Error';
        setTimeout(clearCalc, 1200);
    }
}

// ---------------- DIAMETER ----------------
function calcD1() { const r=+document.getElementById('r1').value||0; document.getElementById('d1').textContent=(2*r).toFixed(2); }
function calcD2() { const d=+document.getElementById('d2').value||0; document.getElementById('r2').textContent=(d/2).toFixed(2); }
function calcD3() { const r=+document.getElementById('r3').value||0; document.getElementById('c3').textContent=(2*Math.PI*r).toFixed(2); }
function calcD4() { const d=+document.getElementById('d4').value||0; document.getElementById('c4').textContent=(Math.PI*d).toFixed(2); }

// ---------------- AREA ----------------
function calcAreaRect() { const l=+document.getElementById('rl').value||0,w=+document.getElementById('rw').value||0; document.getElementById('rectAns').textContent=(l*w).toFixed(2); }
function calcAreaSquare() { const s=+document.getElementById('ss').value||0; document.getElementById('squareAns').textContent=(s*s).toFixed(2); }
function calcAreaTri() { const b=+document.getElementById('tb').value||0,h=+document.getElementById('th').value||0; document.getElementById('triAns').textContent=(0.5*b*h).toFixed(2); }
function calcAreaCircle() { const r=+document.getElementById('cr').value||0; document.getElementById('circleAns').textContent=(Math.PI*r*r).toFixed(2); }
function calcAreaPara() { const b=+document.getElementById('pb').value||0,h=+document.getElementById('ph').value||0; document.getElementById('paraAns').textContent=(b*h).toFixed(2); }
function calcAreaTrap() { const a=+document.getElementById('ta').value||0,b=+document.getElementById('tb2').value||0,h=+document.getElementById('th2').value||0; document.getElementById('trapAns').textContent=(0.5*(a+b)*h).toFixed(2); }

// ---------------- VOLUME ----------------
function calcVolCube() { const s=+document.getElementById('vs').value||0; document.getElementById('cubeAns').textContent=(s**3).toFixed(2); }
function calcVolPrism() { const l=+document.getElementById('vpl').value||0,w=+document.getElementById('vpw').value||0,h=+document.getElementById('vph').value||0; document.getElementById('prismAns').textContent=(l*w*h).toFixed(2); }
function calcVolCyl() { const r=+document.getElementById('vr').value||0,h=+document.getElementById('vh').value||0; document.getElementById('cylAns').textContent=(Math.PI*r*r*h).toFixed(2); }
function calcVolCone() { const r=+document.getElementById('vcr').value||0,h=+document.getElementById('vch').value||0; document.getElementById('coneAns').textContent=((1/3)*Math.PI*r*r*h).toFixed(2); }
function calcVolSphere() { const r=+document.getElementById('vsp').value||0; document.getElementById('sphereAns').textContent=((4/3)*Math.PI*r**3).toFixed(2); }

// ---------------- PERIMETER ----------------
function calcPerimRect() { const l=+document.getElementById('pl').value||0,w=+document.getElementById('pw').value||0; document.getElementById('pRectAns').textContent=(2*(l+w)).toFixed(2); }
function calcPerimSquare() { const s=+document.getElementById('ps').value||0; document.getElementById('pSquareAns').textContent=(4*s).toFixed(2); }
function calcPerimTri() { const a=+document.getElementById('pa').value||0,b=+document.getElementById('pb').value||0,c=+document.getElementById('pc').value||0; document.getElementById('pTriAns').textContent=(a+b+c).toFixed(2); }
function calcPerimPara() { const a=+document.getElementById('pp1').value||0,b=+document.getElementById('pp2').value||0; document.getElementById('pParaAns').textContent=(2*(a+b)).toFixed(2); }
function calcPerimCirc() { const r=+document.getElementById('pcir').value||0; document.getElementById('pCircAns').textContent=(2*Math.PI*r).toFixed(2); }