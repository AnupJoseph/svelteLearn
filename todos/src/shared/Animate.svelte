<script>
  function dropout(node, { duration }) {
    return {
      duration,
      css: (t) => `transform: translateY(8rem) rotateZ(20deg);
            opacity:0`,
    };
  }
</script>
