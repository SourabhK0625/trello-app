"use client";
import React, { useState } from "react";
import { useDrop } from "react-dnd";
import TaskCard from "./taskCard";
import EditTaskCard from "./modals/editCard";
import CommonDeleteDialog from "../Dialog/commonDeleteDialog";
import ViewModal from "./modals/viewModal";

const WorkSpaces = ({ data, moveCard }) => {
  const [deleteModal, setDeleteModal] = useState(false);
  const [dataList, setDataList] = useState(data);
  const [selectCard, setSelectCard] = useState(null);
  const [editModal, setEditModal] = useState(false);
  const [viewModal, setViewModal] = useState(false);

  const [, drop] = useDrop({
    accept: "CARD",
    drop: (item, monitor) => {
      const source = {
        droppableId: item.source.droppableId,
        index: item.index,
      };
      const destination = {
        droppableId: data.uniqueId,
        index: item.index,
      };
      moveCard(source, destination);
    },
  });

  const deleteCardList = () => {
    const deleteList = dataList?.cardList?.filter(
      (val) => val?.id !== selectCard?.id
    );
    const updatedDataList = {
      ...dataList,
      cardList: deleteList,
    };
    setDataList(updatedDataList);
    setDeleteModal(false);
  };

  const updateCardData = (updatedCard) => {
    const updatedCardList = dataList.cardList.map((card) =>
      card.id === updatedCard.id ? updatedCard : card
    );
    setDataList({ ...dataList, cardList: updatedCardList });
    setEditModal(false);
  };

  return (
    <>
      <div
        ref={drop}
        className="flex-col container shadow-md border rounded-md p-2 m-2 max-w-[350px]"
      >
        <h3 className="bg-blue-500 text-start p-2 text-white font-semibold">
          {dataList?.title}
        </h3>
        <div className="flex-col mt-4">
          {dataList?.cardList?.length > 0 &&
            dataList?.cardList.map((card, index) => (
              <TaskCard
                key={card?.id}
                card={card}
                index={index}
                source={{ droppableId: dataList.uniqueId, index }}
                moveCard={moveCard}
                setDeleteModal={setDeleteModal}
                setSelectCard={setSelectCard}
                setEditModal={setEditModal}
                setViewModal={setViewModal}
              />
            ))}
        </div>
      </div>
      <CommonDeleteDialog
        title={"Are you sure you want to delete ?"}
        open={deleteModal}
        dialogVariant="danger"
        header={"Delete"}
        subtitle={"Once deleted action cannot be reverted"}
        primaryButtonAction={deleteCardList}
        secondaryButtonAction={() => setDeleteModal(false)}
        onOpenChange={() => setDeleteModal(false)}
      />
      <EditTaskCard
        open={editModal}
        onOpenChange={() => setEditModal(false)}
        secondaryButtonAction={() => setEditModal(false)}
        data={selectCard}
        handleUpdate={(updatedCard) => updateCardData(updatedCard)}
      />
      <ViewModal
        open={viewModal}
        onOpenChange={() => setViewModal(false)}
        secondaryButtonAction={() => setViewModal(false)}
        data={selectCard}
      />
    </>
  );
};

export default WorkSpaces;
