
# Interactive Rubik's Cube Simulator Documentation

## User Flow Diagram

### 1. User Interaction Flow

#### Start
1. **Open the Application**: The user visits the Rubik's Cube Simulator webpage.
2. **Home Screen**: The user is presented with options:
   - "Start a 3x3 Cube"
   - "Customize Cube Dimensions"
   - "Learn How to Solve"
3. **Cube Initialization**:
   - If the user chooses "Start a 3x3 Cube", a default 3x3 cube is generated.
   - If the user selects "Customize Cube Dimensions", the user enters a size (e.g., NxNxN).

#### Interaction with Cube
4. **Viewing and Rotating**:
   - Users can rotate the entire cube using mouse drag or touch gestures.
5. **Slice Rotation**:
   - Users click a cubelet.
   - The system highlights the slice to be rotated.
   - Users select a direction (up, down, left, right) to rotate the slice.
   - Animation plays for the rotation.

#### Solving the Cube
6. **Manual Solving**:
   - Users can continue interacting with the cube to solve it manually.
7. **Algorithmic Solving**:
   - Users click the "Solve" button.
   - The system calculates the solution steps using an algorithm (e.g., CFOP).
   - Steps are displayed, and animations guide the solving process.

#### End
8. **Completion**:
   - The cube is solved.
   - Users can restart or customize a new cube.

---
