## Class Diagram

### Classes

```plaintext
+----------------------+          +--------------------+         +----------------------+
|     Cubelet          |          |    CubeController  |         |    SolverAlgorithm   |
+----------------------+          +--------------------+         +----------------------+
| - position: Vector3  |          | - cube: Cube       |         | - cubeState: Array   |
| - colors: Array      |          | - raycaster: Ray   |         | - algorithm: String  |
|                      |          | - size: Integer    |         |                      |
+----------------------+          +--------------------+         +----------------------+
| + render(): void     |          | + detectClick(): void |       | + solveCube(): Array |
| + updateColors(): void |        | + rotateSlice(): void|       | + applySteps(): void |
|                      |          | + initCube(): void  |         |                      |
+----------------------+          +--------------------+         +----------------------+

      |                               |                                   |
      v                               v                                   v

+-------------------+         +--------------------+         +-------------------+
|       Cube        |         |      UIManager     |         |       User        |
+-------------------+         +--------------------+         +-------------------+
| - cubelets: Array |         | - controls: Object |         | - userActions: Log |
| - size: Integer   |         | - menuOptions: Array|        |                   |
+-------------------+         +--------------------+         +-------------------+
| + renderCube(): void |      | + displayMenu(): void |      | + interactCube(): void |
| + rotateSlice(): void|      | + updateUI(): void   |      | + viewTutorials(): void |
+-------------------+         +--------------------+         +-------------------+
```

### Class Relationships

1. **Cubelet**:
   - Represents a single cubelet (small cube) in the Rubik's Cube.
   - Contains position and color data.

2. **Cube**:
   - Composed of multiple `Cubelet` objects.
   - Handles rendering and slice rotations.

3. **CubeController**:
   - Manages interactions with the cube (e.g., raycasting for clicks).
   - Connects user inputs to cube state updates.

4. **SolverAlgorithm**:
   - Implements algorithms to solve the cube.
   - Interacts with the `Cube` class to update its state.

5. **UIManager**:
   - Manages UI elements such as menus, buttons, and tutorials.
   - Updates the interface based on user actions and cube state.

6. **User**:
   - Tracks user interactions with the application.
   - Can view tutorials, start a new cube, or solve the cube manually/algorithmically.

---

This setup ensures a modular and scalable architecture for the Rubik's Cube Simulator. Additional features like multiplayer or leaderboards can be integrated by extending the `User` or `UIManager` classes.

