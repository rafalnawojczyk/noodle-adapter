package expo.modules.noodleadapter

import expo.modules.kotlin.modules.Module
import expo.modules.kotlin.modules.ModuleDefinition
import org.worldcubeassociation.tnoodle.scrambles.InvalidScrambleException
import org.worldcubeassociation.tnoodle.scrambles.Puzzle

import org.worldcubeassociation.tnoodle.puzzle.ClockPuzzle
import org.worldcubeassociation.tnoodle.puzzle.FourByFourCubePuzzle
import org.worldcubeassociation.tnoodle.puzzle.MegaminxPuzzle
import org.worldcubeassociation.tnoodle.puzzle.NoInspectionFiveByFiveCubePuzzle
import org.worldcubeassociation.tnoodle.puzzle.NoInspectionFourByFourCubePuzzle
import org.worldcubeassociation.tnoodle.puzzle.NoInspectionThreeByThreeCubePuzzle
import org.worldcubeassociation.tnoodle.puzzle.PyraminxPuzzle
import org.worldcubeassociation.tnoodle.puzzle.SkewbPuzzle
import org.worldcubeassociation.tnoodle.puzzle.SquareOnePuzzle
import org.worldcubeassociation.tnoodle.puzzle.ThreeByThreeCubeFewestMovesPuzzle
import org.worldcubeassociation.tnoodle.puzzle.ThreeByThreeCubePuzzle
import org.worldcubeassociation.tnoodle.puzzle.TwoByTwoCubePuzzle

class ScrambleGenerator(private val puzzleType: String) {
    private var puzzle: Puzzle? = null

    init {
        puzzle = try {
            when (puzzleType) {
                "222" -> TwoByTwoCubePuzzle()
                "333" -> ThreeByThreeCubePuzzle()
                "444" -> FourByFourCubePuzzle()
                "555" -> FourByFourCubePuzzle()
                "666" -> FourByFourCubePuzzle()
                "777" -> FourByFourCubePuzzle()
                "minx" -> MegaminxPuzzle()
                "pyram" -> PyraminxPuzzle()
                "skewb" -> SkewbPuzzle()
                "clock" -> ClockPuzzle()
                "sq1" -> SquareOnePuzzle()
                "333oh" -> ThreeByThreeCubePuzzle()
                "333bf" -> NoInspectionThreeByThreeCubePuzzle()
                "444bf" -> NoInspectionFourByFourCubePuzzle()
                "555bf" -> NoInspectionFiveByFiveCubePuzzle()
                "333fmc" -> ThreeByThreeCubeFewestMovesPuzzle()
                else -> ThreeByThreeCubePuzzle()
            }
        } catch (e: Exception) {
            null
        }
    }

    fun getPuzzle(): Puzzle? {
        return puzzle
    }

    fun setPuzzle(puzzle: Puzzle) {
        this.puzzle = puzzle
    }
}

class NoodleAdapterModule : Module() {
    private var scrambleGenerator: ScrambleGenerator? = null

    override fun definition() = ModuleDefinition {
        Name("NoodleAdapter")

        Function("getScramble") { puzzleType: String ->
            scrambleGenerator = ScrambleGenerator(puzzleType)
            return@Function scrambleGenerator?.getPuzzle()?.generateScramble() ?: "Invalid puzzle type"
        }
    }
}
