/**
 * @param {number[][]} positions
 * @return {number[]}
 */
var fallingSquares = function (positions) {
    var landingSurfaces = [[0, Infinity, 0]];
    var highestSurface = [];
    for (let i = 0; i < positions.length; i++) {
        var squareLeft = positions[i][0];
        var squareSize = positions[i][1];
        var newSurfaceHeight;
        for (let j = landingSurfaces.length - 1; j >= 0; j--) {
            var surfaceLeft = landingSurfaces[j][0];
            var surfaceSize = landingSurfaces[j][1];
            var surfaceHeight = landingSurfaces[j][2];
            if (surfacesIntersect(landingSurfaces[j], squareLeft, squareSize)) {
                newSurfaceHeight = surfaceHeight + squareSize;
                break;
            }
            else {
                newSurfaceHeight = squareSize;
            }
        }
        landingSurfaces.push([squareLeft, squareSize, newSurfaceHeight]);
        landingSurfaces.sort(
            function (a, b) {
                (a[2] > b[2]) ? -1 : 1
            });
        Array.so
        if (highestSurface.length > 0) {
            highestSurface.push((newSurfaceHeight > highestSurface[highestSurface.length - 1]) ? newSurfaceHeight : highestSurface[highestSurface.length - 1]);
        }
        else {
            highestSurface.push(newSurfaceHeight);
        }
    }
    return highestSurface;
};

function surfacesIntersect(surface, secondStart, secondLength) {
    var secondPoints = [];
    for (let i = secondStart; i <= secondStart + secondLength; i++) {
        secondPoints.push(i);
    }
    for (let i = 0; i < secondPoints.length; i++) {
        if (i == 0 || i == secondPoints.length - 1) {
            if (surface[0] < secondPoints[i] && surface[0] + surface[1] > secondPoints[i]) return true;
        }
        else {
            if (surface[0] <= secondPoints[i] && surface[0] + surface[1] >= secondPoints[i]) return true;
        }
    }
    return false;
}

//fallingSquares([[1, 2], [2, 3], [6, 1]]);
//fallingSquares([[100, 100], [200, 100]]);
//fallingSquares([[1, 2], [1, 3]]);
//fallingSquares([[2, 1], [2, 9], [1, 8]]);
//fallingSquares([[100, 100], [200, 100]]);
fallingSquares([[50, 47], [95, 48], [88, 77], [84, 3], [53, 87], [98, 79], [88, 28], [13, 22], [53, 73], [85, 55]]); //Expected: [47,95,172,172,259,338,366,366,439,494]