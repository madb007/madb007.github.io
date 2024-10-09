<template>
  <div class="min-h-screen bg-gray-900 text-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-blue-400">My Coursework</h2>
      <div class="space-y-12">
        <!-- Quarter 1 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden p-6 shadow-lg quarter-card">
          <h3 class="text-3xl font-semibold mb-6 text-blue-300">Fall 2023</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 111: Fundamentals of Computer Programming I</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">MATH 228-1: Multivariate Differential Calculus</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">GEN_ENG 205-1: Engineering Analysis 1 (Linear Algebra + MATLAB)</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">DTC: Design Thinking and Communication</h4>
            </div>
          </div>
        </div>

        <!-- Quarter 2 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden p-6 shadow-lg quarter-card">
          <h3 class="text-3xl font-semibold mb-6 text-blue-300">Winter 2024</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 214: Data Structures and Algorithms</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 211: Fundamentals of Computer Programming II</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">GEN_ENG 205-2: Engineering Analysis 2 (Static Physics)</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">TURKISH 111-1: Intro to Turkish</h4>
            </div>
          </div>
        </div>

        <!-- Quarter 3 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden p-6 shadow-lg quarter-card">
          <h3 class="text-3xl font-semibold mb-6 text-blue-300">Spring 2024</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 349: Machine Learning</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 213: Intro to Computer Systems</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">GEN_ENG 205-3: Engineering Analysis 3 (Dynamics)</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">DTC 2: Design Thinking and Communication</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">ECON 205: Intro to Macroeconomics</h4>
            </div>
          </div>
        </div>

        <!-- Quarter 4 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden p-6 shadow-lg quarter-card">
          <h3 class="text-3xl font-semibold mb-6 text-blue-300">Summer 2024 (Spartanburg Community College)</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">Multivariate Calculus</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">Microeconomics</h4>
            </div>
          </div>
        </div>

        <!-- Quarter 5 -->
        <div class="bg-gray-800 rounded-lg overflow-hidden p-6 shadow-lg quarter-card">
          <h3 class="text-3xl font-semibold mb-6 text-blue-300">Fall 2024</h3>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 343: Operating Systems</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 310: Scalable Software Architectures</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">CS 212: Mathematical Foundations of Computer Science</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">MATH 310-1: Probability and Stochastic Processes</h4>
            </div>
            <div class="bg-gray-700 rounded-lg p-4 shadow-md border border-blue-500 course-card">
              <h4 class="text-lg font-semibold text-blue-200">ECON 310-1: Microeconomics</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CourseworkView',
  // Add any necessary component logic here
}
</script>

<style scoped>
.quarter-card {
  transition: all 0.3s ease;
}
.quarter-card:hover {
  transform: translateY(-5px);
}
.course-card {
  transition: all 0.3s ease;
}
.course-card:hover {
  transform: translateY(-3px);
}
</style>
