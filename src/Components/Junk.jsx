export default function Junk() {
    return (
        <>
            {/* <body>
                <h1 style="text-align:center">CSS Animation Cheatsheet</h1>
                <div class="newGrid container">
                    <!-- Translate -->
                    <div class="row">
                        <!-- Grid Title -->
                        <h2 class="cardTitle text-center col-12">2D Transformations</h2>
                        <!-- TRANSLATIONS (real start)-->
                        <!-- Description -->
                        <h3 class="cardDescription col-2">Translate</h3>
                        <div class="col-10 ">
                            <div class="row">
                                <h4 class="col-4 cardAction">TranslateX()</h4>
                                <h4 class="col-4 cardAction">TranslateY()</h4>
                                <h4 class="col-4 cardAction">Translate()</h4>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="translateX">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="translateY">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>
                                    <!-- New Position  -->
                                    <div class="card cardNew" id="translate">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>

                                </div>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">translateX</span>(100px);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">translateY</span>(25px);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">translate</span>(100px, 25px);
}
                                </code>

                            </div>
                        </div>
                    </div>

                    <!-- Scale -->
                    <div class="row">
                        <!-- Description -->
                        <h3 class="cardDescription col-2">Scale</h3>
                        <div class="col-10 ">
                            <div class="row">
                                <h4 class="col-4 cardAction">ScaleX()</h4>
                                <h4 class="col-4 cardAction">ScaleY()</h4>
                                <h4 class="col-4 cardAction">Scale()</h4>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="scaleX">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="scaleY">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>
                                    <!-- New Position  -->
                                    <div class="card cardNew" id="scale">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>

                                </div>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">scaleX</span>(1.2);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">scaleY</span>(0.8);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">scale</span>(1.2, 0.8);
}
                                </code>

                            </div>
                        </div>
                    </div>

                    <!-- Skew -->
                    <div class="row">
                        <!-- Description -->
                        <h3 class="cardDescription col-2">Skew</h3>
                        <div class="col-10 ">
                            <div class="row">
                                <h4 class="col-4 cardAction">SkewX()</h4>
                                <h4 class="col-4 cardAction">SkewY()</h4>
                                <h4 class="col-4 cardAction">Skew()</h4>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="skewX">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="skewY">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-4 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>
                                    <!-- New Position  -->
                                    <div class="card cardNew" id="skew">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>

                                </div>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">skewX</span>(45deg);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">skewY</span>(-20deg);
}
                                </code>

                                <code class=" col-4 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">skew</span>(45deg, -20deg);
}
                                </code>

                            </div>
                        </div>
                    </div>

                    <!-- Rotate -->
                    <div class="row">
                        <!-- Description -->
                        <h3 class="cardDescription col-2">Rotate</h3>
                        <div class="col-10 ">
                            <div class="row">
                                <h4 class="col-12 cardAction">Rotate()</h4>

                                <!-- Container for SVGs -->
                                <div class="cardContainer col-12 center">
                                    <!-- Original Position -->
                                    <div class="card cardOriginal">
                                        <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle">
                                                Original Position
                                            </text>
                                        </svg>
                                    </div>

                                    <!-- New Position  -->
                                    <div class="card cardNew" id="rotate">
                                        <svg class="SVG SVGNew" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                            <path
                                                d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                            </path>
                                            <text x="130" y="105" font-size="16" text-anchor="middle" fill="black">
                                                New Position
                                            </text>
                                        </svg>
                                    </div>
                                </div>

                                <code class=" col-12 codeCSS">
                                    .selector {
                                        transform: <span class="emphasis">rotate</span>(45deg);
}
                                </code>
                            </div>
                        </div>
                    </div>
                </div>

















                <div class="newGrid container">
                    <!-- Translate -->
                    <div class="row">
                        <!-- Grid Title -->
                        <h2 class="cardTitle text-center col-12">3D Transformations</h2>
                        <div class="center">

                            <div class="card3dContainer center">


                                <div class="axis center">
                                    <div class="x"></div>
                                    <div class="y"></div>
                                    <div class="z"></div>
                                </div>

                                <div class="card cardOriginal">
                                    <svg class="SVG SVGOriginal" viewBox="0 0 256 256" id="Flat" stroke-width="1.4">
                                        <path
                                            d="M226.82861,117.17187l-96-96a3.99971,3.99971,0,0,0-5.65722,0l-96,96A4.00016,4.00016,0,0,0,32,124H76v28a4.0002,4.0002,0,0,0,4,4h96a4.0002,4.0002,0,0,0,4-4V124h44a4.00016,4.00016,0,0,0,2.82861-6.82813ZM176,116a4.0002,4.0002,0,0,0-4,4v28H84V120a4.0002,4.0002,0,0,0-4-4H41.65674L128,29.65723,214.34326,116Zm4,100a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,216Zm0-32a4.0002,4.0002,0,0,1-4,4H80a4,4,0,0,1,0-8h96A4.0002,4.0002,0,0,1,180,184Z">
                                        </path>
                                        <text x="130" y="105" font-size="16" text-anchor="middle">
                                            Original Position
                                        </text>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>






























                <button id="spinButton">Spin IT!</button>
                <!-- JS Script Path -->
                <script src="script.js"></script>
            </body>

        </html > */}


    </>
  )
}