<template>
  <div class="skills">
    <TimeLineItem
      v-for="item in timelineItems"
      :key="item.year"
      :title="item.title"
      :text="item.text"
      :year="item.year"
      :imageUrl="item.imageUrl"
    />
  </div>
</template>

<script>
import TimeLineItem from "@/components/TimeLineItem.vue";

export default {
  components: {
    TimeLineItem,
  },
  data() {
    return {
      timelineItems: [
        {
          title: "Start HBO-ICT at Fontys in Eindhoven",
          text: "Description of Event 1",
          year: "2017",
          imageUrl: "https://images.unsplash.com/photo-1525275963076-7a70249a9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        },
        {
          title: "Event 2",
          text: "Description of Event 2",
          year: "2018",
          imageUrl: "https://images.unsplash.com/photo-1525275963076-7a70249a9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        },
        {
          title: "Event 3",
          text: "Description of Event 3",
          year: "2019",
          imageUrl: "https://images.unsplash.com/photo-1525275963076-7a70249a9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        },
        {
          title: "Event 4",
          text: "Description of Event 4",
          year: "2020",
          imageUrl: "https://images.unsplash.com/photo-1525275963076-7a70249a9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        },
        {
          title: "Event 5",
          text: "Description of Event 5",
          year: "2021",
          imageUrl: "https://images.unsplash.com/photo-1525275963076-7a70249a9925?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1172&q=80",
        },
        // Add more items with image URLs as needed
      ],
    };
  },
};
</script>

<style>
.skills {
  position: relative;
  display: flex;
  align-items: flex-start;
  padding: 1rem 0rem;
  gap: 1rem;
}
</style>
